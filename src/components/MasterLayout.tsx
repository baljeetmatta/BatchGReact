import { Outlet } from "react-router-dom";

const MasterLayout=()=>{

    return(
        <>
        <div>Master Products</div>
        <div>
        <Outlet/>
        </div>
        </>
    )
}
export default MasterLayout;