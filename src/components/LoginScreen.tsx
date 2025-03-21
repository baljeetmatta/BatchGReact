import { useContext, useRef } from "react";
import { LoginContext, LoginType } from "./LoginContext";

const LoginScreen = () => {
    const context=useContext<LoginType|undefined>(LoginContext);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const loginHandler = () => {
        // console.log(inputRef.current?.value)
      //  if (inputRef.current)
        //    inputRef.current.value = "Coding";
      context?.setName(inputRef.current?.value);


    }
    const logoutHandler=()=>{
        context?.setName(undefined);
        
    }
    if(context?.name)
        return <button onClick={logoutHandler}>Logout</button>

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={loginHandler}>Login</button>
        </>
    )
}
export default LoginScreen;