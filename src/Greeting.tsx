// function Greeting()
// {
//     return (
//         <>Welcome to Greeting</>
//     )
// }
// export default Greeting;
// const Greeting=()=>{
//     return (
//         <>Greeting</>
//     )
// }
// export default Greeting
// const Greeting:React.FC=()=>{
//     return (
//         <>Welcome to Greeting</>
//     )
// }
// export default Greeting;
// import React from 'react';

// interface Props {
  
// }

// const Component: React.FC<Props> = ({  }) => {
//   return (
//     <></>
//   );
// };

// export default Component;
type ObjectType={
    name:string,
    age:number
}
type GreetingProps={
    name:string,
    years?:number
    code?:ObjectType,
    children:React.ReactNode
}
const Greeting=(props:GreetingProps)=>{
    return (
        <><div>Welcome to {props.name} -{props.years} - {props.code?.name} {props.children}</div></>
    )
}
export default Greeting;
