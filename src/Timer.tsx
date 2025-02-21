import { useEffect, useState } from "react";

const Timer=()=>{

   // let count=1;
    const [count,setCount]=useState(0);

    useEffect(()=>{
       let id= setInterval(timerTick,1000);
       console.log(id);
        //for each render
        return ()=>clearInterval(id);

    },[count])//dependency -list of variables 
    const timerTick=()=>{
       // count++;
       setCount(count+1);

      ///  console.log(count);

    }
   //let id= setInterval(timerTick,1000);
   //console.log(id);
    return (
        <><div>{count}</div></>
    )
}
export default Timer;