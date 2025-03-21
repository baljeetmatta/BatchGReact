import { useContext } from "react";
import { UserType } from "./UserDashboard";
import { UserContext } from "./UserContext";

type SidebarProps={
    user:UserType
}
//const Sidebar=(props:SidebarProps)=>{
    const Sidebar=()=>{
        const user=useContext<UserType|undefined>(UserContext);

    return (
        <>
        Side bar - {user?.name}
        </>
    )
}
export default Sidebar;
