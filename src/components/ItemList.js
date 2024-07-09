import { combine } from "zustand/middleware";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import useStore from "./zustandStore"; 

import useStore from "./zustandStore"; 
const ItemList = ({items,showButton = true }) => {
    const cartItems = useStore((state) => state.cartItems)
    const increasePopulation = useStore((state) => state.increasePopulation)
    let price = 0;
return(
    <div>
        {items.map((i,price1)=>(
            
            <div className="flex justify-between">
            <div className="w-6/12">


            <div className="p-2 m2 border-gray border-b-2 text-left">
                
            <div className="py-2">
          <span>{i.card.info.name} </span>
          <span>₹{(i.card.info.price/100)?(i.card.info.price/100):(i.card.info.defaultPrice/100)}</span>
          </div>
          <p className="text-xs">{i.card.info.description}</p>
          </div>



</div>
<div className="w-2/12">


{showButton && <button className="text-sm bg text-white bg-black  cent rounded-sm" onClick={() => {increasePopulation(i);
    console.log(cartItems);
    
}}>Add +</button>}


<img src={CDN_URL+i.card.info.imageId} className="h-16 w-full"></img>
</div>
</div>

        )
        )}

    </div>
)
}

export  default ItemList;