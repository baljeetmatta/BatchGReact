import { useState } from "react";
type UserType={
    name:string,
    email:string
}
const Login=()=>{
    const [isLoggedIn,setLogin]=useState(false);
    //const [user,setUser]=useState<UserType>({} as UserType);
    const [user,setUser]=useState<UserType|null>(null);


    const loginHandler=()=>{
        setLogin(true);
        setUser({name:"Code",email:"@mail"})

    }
    const logoutHandler=()=>{
        setLogin(false);
        //setUser({} as UserType)
        setUser(null)
    }


    return (
        <>
        <div>
            <div>{user?.name} {user?.email}</div>
            {isLoggedIn?'Logged in ':'Logged out'}
            <button onClick={loginHandler}>Log in </button>
            <button onClick={logoutHandler}>Log out</button>
        </div>
        </>
    )

}

// const Login = () => {
//     // let state=useState();
//     // //console.log(state);
//     // let data=state[0];
//     // let setData=state[1];
//     // let obj={name:"First",age:20};
//     // let {age}=obj;
//     // console.log(name);
//     const [data,setData]=useState("Hi");





//    // let data = "Hi";
//     const clickHandler = () => {
//        // data = "Bye";
//        setData("Bye");

//         console.log(data);
//     }
//     return (
//         <>
//             <div>
//                <div>You value is  {data}</div>
//                 <button onClick={clickHandler}>Change</button>
//             </div>
//         </>
//     )
// }
export default Login