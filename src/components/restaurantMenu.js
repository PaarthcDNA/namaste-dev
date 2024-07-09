
import { useState,useEffect } from "react";
import {useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useResfaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
 


const RestaurantMenu = () => {
    const { resId } = useParams();
    //initially empty array , then after that state updates
    const resMenuItem = useRestaurantMenu(resId);
    const[showIndex,setShowIndex] = useState();
    const[prevIndex,SetPrevIndex] = useState();
    
    console.log(resMenuItem);
    if(resMenuItem.length===0) return <div className="m-4 p-4 w-52 bg-gray-100 h-[485px] flex flex-col ..."></div>

    const categories = resMenuItem.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>(
        c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    )
    console.log(categories)
  
return(<div>
    <div className=" p-10 text-center ">
    <h1 className="text-xl font-bold py-1">{resMenuItem.cards[0].card.card.text}</h1>
    <h2 className="py-1 text-lg">{resMenuItem.cards[2].card.card.info.cuisines.join(", ")}</h2>
    <h2 className="text-lg">{resMenuItem.cards[2].card.card.info.costForTwoMessage}</h2>

    {
        categories.map((c,index)=> (
            <RestaurantCategory data={c.card.card} showItems={index===showIndex   ? true : false} setShowIndex={() => {setShowIndex(index);
                
            }}/>
        ))
    }

    </div>
    
<br></br>


</div>

)
   


}

export default RestaurantMenu

