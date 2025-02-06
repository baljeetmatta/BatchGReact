
import './App.css'
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
import Greeting from './Greeting';
import Types from './Types';
//import Types from './Types';
import results from "./data.json";

function App()
{
  let data=10;
  
  return (
    <>
    Welcome to React
    {/* <Types/> */}
    {/* <Greet/>
    <Test/> */}
     <Greeting name="CodeQuotient" years={data} code={results[0]}>
      <Types/>
      </Greeting>
    {/* <Greeting name="Chitkara"/>  */}


    </>
  )
}
export default App;
