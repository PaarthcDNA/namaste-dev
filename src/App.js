import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";

import RestaurantMenu from "./components/restaurantMenu";

import UserContext from "./utils/UserContext";
import ShoppingCart from "./components/shoppingCart";

const AppLayout = () => {

  //auth code
  const [username,setUserName] = useState();

  useEffect(()=>{
    //api call
    data = {
      name:'Paarth'
    }
    setUserName(data.name);
  },[])




    return (

      <UserContext.Provider value={{loggedInUser:username,setUserName}}>
        <div className="AppLayout">
    
            <Header/>
     
            <Outlet/>
           
           
            
        </div>
        </UserContext.Provider>
    )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
   
    children:[{
      path:"/",
      element:<Body/>

    },
    {
      path:"/aboutUs",
      element:<About/>
    },
    {
      path:"/contactUs",
      element:<Contact/>
    },
    {
      path:"/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/cart",
      element:<ShoppingCart/>
    }

    ]
  }




])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>);