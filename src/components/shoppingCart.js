import useStore from "./zustandStore"; 
import ItemList from "./ItemList";


const ShoppingCart = () => {
    const cartItems = useStore((state) => state.cartItems)
    const clearCart = useStore((state) => state.clearCart);
     



    return(

        cartItems.length === 0 ? <div> <div className="flex justify-center ">
            <h1 className="flex justify-center text-2xl ">Shopping Cart</h1>
            </div><div className="flex justify-center my-4" >
        <h2 className="font-medium">No Items in Cart, Shop!</h2></div></div>
    :(
        <div className="w-6/12 m-auto">
            <div >
            <h1 className="flex justify-center text-2xl my-6">Shopping Cart(Items:{cartItems.length})</h1>
            <ItemList items={cartItems} showButton = {false } />
            
                        
            </div>
        <button className="bg-slate-300 p-2 m-2 hover:poin" onClick={() => clearCart()}>clearCart</button>
        </div>
    ))
}

export default ShoppingCart