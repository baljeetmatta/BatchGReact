import { useState } from "react";

const UI=()=>{

   // let textData="";
   const [textData,setText]=useState("");
    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
            //let target=e.target as HTMLInputElement
           // textData=e.target.value;
           setText(e.target.value);

    }
const printHandler=()=>{
    alert(textData);

}
const updateHandler=()=>{
   // textData="Hi";
   setText("Hi");
   
    console.log(textData);

}
    return (
        <>
        <div>
            <input value={textData} type="text" onChange={changeHandler}/>
            <button onClick={printHandler}>Print</button>
            <button onClick={updateHandler}>Change</button>
        </div>
        </>
    )

}
export default UI;
