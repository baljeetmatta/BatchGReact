
//import './App.css'
import Banner from './Banner';
import Button from './Button';
import CTimer from './CTimer';
import Controls from './Controls';
// import namesList from './data.json';

// function App() {
// //variables
// let data="CodeQuotient";
// //array
// let arrData:string[]=["First","Second","Third"];
// //object
// // let obj:{name:string,age:number}={

// //   name:"test name",
// //   age:30
// // }
// //Object
// type objectType={
//   name:string,
//   age:number;
// }
// let obj:objectType={
//   name:"First name",
//   age:20
// }
// //Array of Objects
// let arrObj:objectType[]=namesList;

//   return (
//     <>
//       <div className="bg-red-400 text-white">
//         Welcome to {data}
//       </div>
//       <p>{arrData}</p>
//       {
//         arrData.map((item)=>{
//           return <p>{item}</p>

//         })
//       }
//     {obj.name} -{obj.age}

//     {
//       namesList.map((item)=>{
//        return  <p>{item.name} - {item.age}</p>
//       })
//     }

//     </>
//   )
// }

// export default App

import Greet,{Test} from './Greet';
import GreetClass from './GreetClass';
import Greeting from './Greeting';
import Login from './Login';
import Parent from './Parent';
import Timer from './Timer';
import Types from './Types';
import UI from './assets/UI';
//import Types from './Types';
import results from "./data.json";

// function App()
// {
//   let data=10;
  
//   return (
//     <>
//     Welcome to React
//     {/* <Types/> */}
//     {/* <Greet/>
//     <Test/> */}
//      {/* <Greeting name="CodeQuotient" years={data} code={results[0]}>
//       <Types/>
//       </Greeting> */}
//     {/* <Greeting name="Chitkara"/>  */}

// <Button value="Send"/>
// <Button value="Click"/>

//     </>
//   )
// }
// const clickHandlerSend=(e:React.MouseEvent)=>{
//   let target=e.target as HTMLButtonElement;

//   alert(target.innerText+ " Button Clicked");
// }
// const clickHandlerClick=(e:React.MouseEvent)=>{
//   let target=e.target as HTMLButtonElement;
//   alert(target.innerText+ " button clicked")

// }
// function App()
// {
//   return (
//     <>
//     <Button value="Send data" click={clickHandlerSend}/>
//     <Button value="Click" click={clickHandlerClick}/>
//     </>
//   )
// }

function App()
{
  return (
    <>
    {/* <Controls/> */}
    {/* <Banner/> */}
    {/* <Login/> */}
    {/* <UI/> */}
    {/* <Parent/> */}
    {/* <GreetClass name="Code"/> */}
    {/* <Timer/> */}
    <CTimer/>
    
    </>
  )
}
export default App;
