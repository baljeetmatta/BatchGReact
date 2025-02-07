import { ChangeEvent } from "react";

const Controls=()=>{

let textData="";
const clickHandler=()=>{
    alert(textData);
    
}
    const changeHandler=(e:ChangeEvent)=>{
        let target=e.target as HTMLInputElement;
        textData=target.value;
        //console.log(textData);



    }
    return (
        <>
        <input type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>Print</button>
        </>
    )
}
export default Controls;
