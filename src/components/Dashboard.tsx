import { useContext } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { UserType } from "./UserDashboard";
import { UserContext } from "./UserContext";
type DashboardProps={
    user:UserType;
}
//const Dashboard=(props:DashboardProps)=>{

    const Dashboard=()=>{
        const user=useContext<UserType|undefined>(UserContext);


    return (
        <>
        {user?.name}
        {/* Dashboard - {props.user.name}
        <Sidebar user={props.user}/>
        <Profile user={props.user}/> */}
        <Sidebar/>
        </>
    )
}
export default Dashboard;
