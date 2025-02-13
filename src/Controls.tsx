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
//npm install tailwindcss@3  
//npx tailwindcss@3 init  
//npx tailwindcss@3 -i ./ -o ./

//1. npm instal tailwindcss @tailwindcss/vite
//2. vite.config
    // a. import tailwindcss "@tailwindcss/vite"
    // b. plugins:[react(),tailwindcss()]
//3. index.css-> @import "tailwindcss"