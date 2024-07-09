import RestaurantCard,{ClosesInResCard} from "./RestaurantCard";
import RestaurantMenu from "./restaurantMenu";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOfflinestatus from "../utils/newViewOfflineStatus";
import UserContext from "../utils/UserContext";
import useStore from "./zustandStore"; 


const Body = () => {

    //State Variablees
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchText,setSearchText] =useState("");

    const {loggedInUser,setUserName} = useContext(UserContext)
    const onlineStatus = useOfflinestatus();
    const ClosesInRestaurantCard = ClosesInResCard(RestaurantCard);


    const cartItems = useStore((state) => state.cartItems)
    const increasePopulation = useStore((state) => state.increasePopulation)


    //Use Effect fn
    useEffect(()=>{
        fetchData();
    },[]);
    
    

    //fetch data fn used in useEffect
    const fetchData = async () => {
        const data = await fetch(
            
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7034729&lng=77.1596606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        
        
        setListOfRestaurants(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        //console.log(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // know why its not working console.log(listOfRestaurants)
    }

    if(onlineStatus===false) {
        return(
       
            <h2>You are offline check ur connection and try again</h2>
      
    )}
   
   
    //conditional rendering
    return listOfRestaurants.length===0? <Shimmer/>:(<div className = "body">
     

        <div className="flex justify-between">
  

            <div className="mx-6"  >
                <input  type="text" className=" border border-solid border-gray-400 rounded-md"
                 value={searchText}
                  onChange={(e) =>
                    {const newValue = e.target.value;
                        setSearchText(newValue);
                        console.log(newValue);
                        const filteredList= listOfRestaurants.filter(
                            (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) || 
                            res?.info?.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredRestaurants(filteredList)
                    }}
                  />

                  



                <span className="inline-flex m-4 -space-x-px overflow-hidden rounded-md border bg-gray-50 shadow-sm">
                <button className="inline-block px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                
                
                onClick={() => {
                   
                const filteredList= listOfRestaurants.filter(
                (res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) || 
                res?.info?.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
                )
                setFilteredRestaurants(filteredList)}}
                >Search</button></span>


            </div>
        

            <span className="inline-flex m-4 -space-x-px overflow-hidden rounded-md border bg-gray-50 shadow-sm">
                <button className="inline-block px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                
        onClick={
            
            () => {
                
                const filteredList = listOfRestaurants?.filter(
                    (res) => res?.info?.avgRating >4
                )
                setFilteredRestaurants(filteredList);
            }

            
        }>Top Rated Restaurants</button>
        </span>
        
        </div>


        <div className="flex flex-wrap justify-center">
        {filteredRestaurants.length > 0 ? 
        (filteredRestaurants?.map((restaurant) =>(
            
   
        <Link to = {"/"+restaurant?.info?.id} key={restaurant?.info?.id}>
            {restaurant.info.avgRating > 4.3 ? 
  <ClosesInRestaurantCard resData={restaurant} />
: 
  <RestaurantCard resData={restaurant} />
}
            {console.log(restaurant)}</Link>)
        )):
        (<h3 className="noResFound">No restaurant found search again</h3>)}
  
            
        </div>
        </div>
    )
}

export default Body;