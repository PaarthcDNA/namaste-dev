
import { useState } from "react";


const User = ({name,message,location}) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return(
        <div className="user-card">
            <h1>User {count1}</h1>
            <br></br>
            <h2>{message}</h2>
            <h3>count = {count}</h3>
            <h3>Name:{name}</h3>
            <h4>Contact @{name}</h4>
            <br></br>
            <h4>Location {location}</h4>
        </div>
    )
}

export default User;