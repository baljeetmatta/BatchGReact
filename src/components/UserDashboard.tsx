import Dashboard from "./Dashboard";
import { UserContext } from "./UserContext";

export type UserType={
    name:string,
    isActive:boolean;    
}

const UserDashboard=()=>{
let user:UserType={
    name:"Code",
    isActive:true
}

    return (
        <>
            {/* <Dashboard user={user}/> */}
            <UserContext.Provider value={user}>
                    <Dashboard/>
            </UserContext.Provider>


        
        </>

    )
}
export default UserDashboard;
