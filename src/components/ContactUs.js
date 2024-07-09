
import useStore from "./zustandStore"; 



const Contact = () => {
    const bears = useStore((state) => state.bears)
    const increasePopulation = useStore((state) => state.increasePopulation)

  
    
    return (

    <div className="contact-us">
          <button onClick={increasePopulation}>one up</button>
        <h1>Contact Us</h1>
        <h1>Call</h1>
        <h2>+91 89two0630threethreethree</h2>
    </div>
    )
}
export default Contact;