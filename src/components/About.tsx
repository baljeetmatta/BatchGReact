import { useLocation } from "react-router-dom";

const About=()=>{
   const location= useLocation();//navigate state, location is object, state
    return (
        <>
        {location.state?.data}
        
        <div>About  page</div></>
    )
}
export default About;