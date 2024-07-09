
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {name,locality,cuisines,avgRating,costForTwo,sla} = resData?.info;
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="m-4 p-4 w-52 bg-gray-100 h-[485px] flex flex-col ... hover:border border-gray-400">
            <img className="h-[200px] py-3" 
            src={CDN_URL+resData.info.cloudinaryImageId}
            />
            <div className="content">
            <h3>{name}</h3>
            
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality} 📌</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}💸</h4>
            <h4>{sla.deliveryTime} mins ⚡</h4>
            
            </div>

        </div>
    )
}

export const ClosesInResCard = (RestaurantCard) => {
return (props) => {
    return(
        <div>

        
            
            <label className="mb-1 py-[0.5px] absolute bg-slate-900 text-stone-100 rounded-sm text-sm	">Highly Rated</label>
            <RestaurantCard {...props}/>
        </div>

    )
}

}



export default RestaurantCard;

