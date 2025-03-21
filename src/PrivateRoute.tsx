import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext, LoginType } from "./components/LoginContext";

const PrivateRoute=()=>{
    const context=useContext<LoginType|undefined>(LoginContext);

return (
    <>
    
   {context?.name? <Outlet/>:<Navigate to="/login"/>}
    </>
)

}
export default PrivateRoute;
