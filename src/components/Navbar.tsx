import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar=()=>{
    const navigate=useNavigate();
    return (
        <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
        </ul>
        <button className="bg-red-400 text-white p-1 rounded-md" onClick={()=>{navigate("/about",{state:{data:10}})}}>Login</button>
        </>
    )
}
export default Navbar;