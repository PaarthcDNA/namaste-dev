
import { useState,useEffect } from "react";

const RestaurantMenu = () => {
    
    const [resMenuItem,setResMenuItem] = useState([]);

    useEffect(() => {
        fetchData();
    },[])



    const  fetchData =async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6717744&lng=77.42967709999999&restaurantId=89918&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.itemCards)
        setResMenuItem("heelo=ji")
        console.log(resMenuItem);
    }


    return(
        <h1>Restaurant Menu This Side</h1>

    )
}

export default RestaurantMenu