import { LOGO_URL } from "../utils/constants";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
 import useOfflinestatus from "../utils/newViewOfflineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOfflinestatus();
    const data = useContext(UserContext)
    const {loggedInUser} = data
    return (

        

        <div className="flex justify-around bg-gray-100 shadow-lg">

<div className="w-24 mr-28s">
        <img src={LOGO_URL}></img>
        
    </div>
            <div className="flex items-center">
                <ul className="flex items-center p-4 m-4">
                    <li className="px-6"><Link to = "/">Home</Link></li>
                    <li className="px-6"><Link to = "/aboutUs">About Us</Link></li>
                    <li className="px-6"><Link to = "/contactUs">Contact Us</Link></li>
                    <li className="px-6"><Link to = "/cart">Cart</Link></li>
                    <li className="px-6">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><button className="Login" 
                    onClick={() => {
                        btnNameReact==='Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button></li>

                    <li className="font-bold px-2" >{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
} 

export default Header;