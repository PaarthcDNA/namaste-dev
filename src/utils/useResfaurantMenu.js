import { useEffect } from "react";

import { useState,useEffect } from "react";
const useRestaurantMenu = (resId) => {
    const [resMenuItem,setResMenuItem] = useState([]);

    useEffect(() => {
        fetchData();
    },[])
   
    



    const  fetchData =async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6717744&lng=77.42967709999999&restaurantId="+resId);
        const json = await data.json();
        
        //console.log(json.data.cards[4].groupedCard.cardGroupMap)
        setResMenuItem(json.data)
     
    }
    return resMenuItem;

}

export default useRestaurantMenu