import React from "react";


class UserClass extends React.Component{
    constructor(props){
       
        super(props)

        this.state = {
            count:0,
            count2:1
        }
        console.log("child cons"+this.props.name)
    }

    componentDidMount(){

        console.log(this.props.name+"child mounted ")
    }

    render(){
        console.log(this.props.name+" childrendered")
        const {name,message,location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="user-card">
            <h1>{name}</h1>
            <br></br>
            <h2>count:{count}and {count2}</h2>
            <button onClick={() => {
                this.setState({
                    count:this.state.count + 1,
                    count2:this.state.count2 +2

                })

            } }>Count Increase</button>
            <button onClick={() => {
                this.setState({
                    count:this.state.count -1

                })
                
            } }>Count Decrease</button>
            <h2>{message}</h2>
            <h3>Name:{name}</h3>
            <h4>Contact @{name}</h4>

            <br></br>
            <h4>Location {location}</h4>                


            </div>
        )
    }



}
export default UserClass;