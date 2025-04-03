// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Home from "./components/Home";
// // import About from "./components/About";
// // import Jobs, { fetchJobs } from "./components/Jobs";
// // import JobDetails, { fetchJobDetails } from "./components/JobDetails";

import { Link, Route, Routes } from "react-router-dom";
import BugApp from "./BugApp";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
//import ChatApp from "./ChatApp";

import Contact from "./components/Contact";
import { lazy } from "react";
const ChatApp=lazy(()=>import("./ChatApp"))
//import Posts from "./Posts";

// import { NavLink, Route, Routes } from "react-router-dom";
// import UserDashboard from "./components/UserDashboard";
// import Home from "./components/Home";
// import Login from "./Login";
// import LoginScreen from "./components/LoginScreen";
// import Contact from "./components/Contact";
// import About from "./components/About";

// // const router=createBrowserRouter([
// //   {
// //     path:"/",
// //     element:<Home/>
// //   },
// //   {
// //     path:"/about",
// //     element:<About/>,
    
// //   }
// //   ,
// //   {
// //     path:"/jobs",
// //     element:<Jobs/>,
// //     loader:fetchJobs
    
// //   }
// //   ,
// //   {
// //     path:"/jobdetails/:id",
// //     element:<JobDetails/>,
// //     loader:fetchJobDetails
    
// //   }
// // ])
// // function App()
// // {

// //   return (

// //     <>
// //     <div>App Component</div>
// //     <RouterProvider router={router}/>

// //     </>
// //   )
// // }
// // export default App;


// // // import { Route, Routes } from "react-router-dom";
// // // import Login from "./Login";
// // // import Home from "./components/Home";
// // // import About from "./components/About";
// // // import Contact from "./components/Contact";
// // // import Navbar from "./components/Navbar";
// // // import MasterLayout from "./components/MasterLayout";

// // // function App(){
// // //   return (
// // //     <>
// // //     <div>App Component</div>
// // //     {/* <Routes>
// // // <Route path="/" element={<div>Home Page</div>}/>
// // // <Route path="/login" element={<Login/>}/>



// // //     </Routes> */}
// // // <Navbar/>
// // //       <Routes>
// // //         <Route path="/" element={<Home/>}/>
// // //         <Route path="/about" element={<About/>}/>
// // //         <Route path="/contact/:city" element={<Contact/>}/>
// // //         <Route path="/login" element={<Login/>}/>

// // //         <Route path="/products/" element={<MasterLayout/>}>
// // //           <Route path="cloth" element={<div>Cloth </div>}></Route>
// // //           <Route path="elect" element={<div>Elect </div>}></Route>
// // //         </Route>

// // //       </Routes>

// // //     </>
// // //   )
// // // }
// // // export default App;
// // // // //import './App.css'
// // // // import Banner from './Banner';
// // // // import Button from './Button';
// // // // import CTimer from './CTimer';
// // // // import Controls from './Controls';
// // // // // import namesList from './data.json';

// // // // // function App() {
// // // // // //variables
// // // // // let data="CodeQuotient";
// // // // // //array
// // // // // let arrData:string[]=["First","Second","Third"];
// // // // // //object
// // // // // // let obj:{name:string,age:number}={

// // // // // //   name:"test name",
// // // // // //   age:30
// // // // // // }
// // // // // //Object
// // // // // type objectType={
// // // // //   name:string,
// // // // //   age:number;
// // // // // }
// // // // // let obj:objectType={
// // // // //   name:"First name",
// // // // //   age:20
// // // // // }
// // // // // //Array of Objects
// // // // // let arrObj:objectType[]=namesList;

// // // // //   return (
// // // // //     <>
// // // // //       <div className="bg-red-400 text-white">
// // // // //         Welcome to {data}
// // // // //       </div>
// // // // //       <p>{arrData}</p>
// // // // //       {
// // // // //         arrData.map((item)=>{
// // // // //           return <p>{item}</p>

// // // // //         })
// // // // //       }
// // // // //     {obj.name} -{obj.age}

// // // // //     {
// // // // //       namesList.map((item)=>{
// // // // //        return  <p>{item.name} - {item.age}</p>
// // // // //       })
// // // // //     }

// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // import Greet,{Test} from './Greet';
// // // // import GreetClass from './GreetClass';
// // // // import Greeting from './Greeting';
// // // // import Login from './Login';
// // // // import Parent from './Parent';
// // // // import Timer from './Timer';
// // // // import Types from './Types';
// // // // import UI from './assets/UI';
// // // // //import Types from './Types';
// // // // import results from "./data.json";

// // // // // function App()
// // // // // {
// // // // //   let data=10;
  
// // // // //   return (
// // // // //     <>
// // // // //     Welcome to React
// // // // //     {/* <Types/> */}
// // // // //     {/* <Greet/>
// // // // //     <Test/> */}
// // // // //      {/* <Greeting name="CodeQuotient" years={data} code={results[0]}>
// // // // //       <Types/>
// // // // //       </Greeting> */}
// // // // //     {/* <Greeting name="Chitkara"/>  */}

// // // // // <Button value="Send"/>
// // // // // <Button value="Click"/>

// // // // //     </>
// // // // //   )
// // // // // }
// // // // // const clickHandlerSend=(e:React.MouseEvent)=>{
// // // // //   let target=e.target as HTMLButtonElement;

// // // // //   alert(target.innerText+ " Button Clicked");
// // // // // }
// // // // // const clickHandlerClick=(e:React.MouseEvent)=>{
// // // // //   let target=e.target as HTMLButtonElement;
// // // // //   alert(target.innerText+ " button clicked")

// // // // // }
// // // // // function App()
// // // // // {
// // // // //   return (
// // // // //     <>
// // // // //     <Button value="Send data" click={clickHandlerSend}/>
// // // // //     <Button value="Click" click={clickHandlerClick}/>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // function App()
// // // // {
// // // //   return (
// // // //     <>
// // // //     {/* <Controls/> */}
// // // //     {/* <Banner/> */}
// // // //     {/* <Login/> */}
// // // //     {/* <UI/> */}
// // // //     {/* <Parent/> */}
// // // //     {/* <GreetClass name="Code"/> */}
// // // //     {/* <Timer/> */}
// // // //     <Timer/>

// // // //     </>
// // // //   )
// // // // }
// // // // export default App;
// import { LoginContext, LoginType } from "./components/LoginContext";
// import { useState } from "react";
// import PrivateRoute from "./PrivateRoute";
// function App(){
//   const [name,setName]=useState<string|undefined>(undefined);

//   return (
//     <>
//     {/* <UserDashboard/> */}
//     Username :{name}
//     <ul className="flex gap-4">
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/login">Login</NavLink></li>
//       <li><NavLink to="/about">About</NavLink></li>
//       <li><NavLink to="/contact">Contact</NavLink></li>
//     </ul>
//     <LoginContext.Provider value={{name,setName}}>
    
//     <Routes>
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/" element={<PrivateRoute/>}>
//       <Route path="about" element={<About/>}></Route>
//       <Route path="contact" element={<Contact/>}></Route>
//       </Route>
//       <Route path="/login" element={<LoginScreen/>}></Route>
//     </Routes>
//     </LoginContext.Provider>
//     </>
//   )
// }
// export default App;
function App(){
  return (
    <>
    <ul className="flex gap-4">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/chats">Chats</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chats" element={<ChatApp/>}/>
      <Route path="/contact" element={<Contact/>}/>


    </Routes>
    </>
  )
}
export default App;