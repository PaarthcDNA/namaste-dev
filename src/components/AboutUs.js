import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";




class About extends React.Component{

constructor(props){
    console.log("parent cons");
    super(props)
}

componentDidMount(){

    console.log("parent mounted ")
}

render(){
    console.log("parent renderd");
    return(
        
        <div className="About Us">
            <h1>About Us</h1>
            <div>Logged iN uSER:
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name="user1" message="hello world" location=
            "Delhi"/>
            <UserClass name="user2" message="hello world" location=
            "Delhi"/>
            <UserClass name="user3" message="hello world" location=
            "Delhi"/>
            
        </div>
    

    )
}
}

export default About;