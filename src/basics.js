// // //Functional Programming
// // //1 Function - First class citizen
// // //entity -> assign to variable, return , pass argument to function
// // function sayHello()
// // {
// //     console.log("Hello");
// // }
// // //sayHello();
// // //const fn=sayHello;
// // //fn();
// // /*function greet(fn)
// // {
// //     fn();
// // }
// // greet(sayHello);
// // */
// // function greet()
// // {
// //         return function()
// //         {
// //             return "Hello";
// //         }
// // }
// // // const fn=greet();//function
// // // console.log(fn());
// // console.log(greet()());


// //2. Higher Order Functions
// // function-> recieves a fun as argument 
// // or it returns a function
// //3. Pure Functions
// // function add(a,b)
// // {
// //     return a+b;
// // }
// //console.log(add(5,4));
// // function getNumber(number)
// // {
// //     return number*Math.random();
// // }
// // console.log(getNumber(10))
// // function getN(number)
// // {
// //     return number*2;
// // }

// // let minAge=21;
// // function isEligible(age,minAge)
// // {
// //     return age>minAge;
// // }
// // console.log(isEligible(20,minAge))

// //4. Nested -> lodash
// // function trim(str)
// // {
// //     return str.trim();
// // }

// // const trim=(str)=>{
// //     return str.trim();
// // }
// // import compose from "lodash/fp/compose.js"
//  import pipe from "lodash/fp/pipe.js"
// const trim=str=>str.trim();
//  const toLower=str=>str.toLowerCase();

//  let input="    JavaScript   ";
// // //let output=`<div>${trim(input)}</div>`;
// //const wrap=(element,str)=>`<${element}>${str}</${element}>`;
// // function wrap(element)
// // {
// //     return function (str)
// //     {
// //         return `<${element}>${str}</${element}>`;
// //     }
// // }
// const wrap=element=>str=>`<${element}>${str}</${element}>`;

// //console.log(wrap("div",input));
// //console.log(wrap("span",input));

// // //let output=wrap(toLower(trim(input)));
// // //const fn=compose(wrap,toLower,trim);
//   const fn=pipe(trim,toLower,wrap("div"))
//    let output=fn(input);

//   console.log(output);
// //5. Currying - Hansel Curry
// //  function -> multiple -> single Argument Function
// // function add(a,b)
// // {
// //     return a+b;

// // }
// // function add(a)
// // {
// //     return function(b)
// //     {
// //         return a+b;

// //     }
// // }
// // //console.log(add(5,4));
// // let fn=add(5);
// // console.log(fn(6));

// //objects
// //let person={"title":"First Name"};
// // let obj=person;//obj->reference to person, Shallow Copy
// // obj.title="New Name";
// // console.log(obj,person);
// //Deep copy
// //1. for each keys -> item
// //2 Spread Operator
// // Arrays ->Spread ->values
// // Object ->Speard Keys

// // let obj={...person};//deep copy of person object
// // obj.title="New Name";
// // console.log(obj,person);

// //console.log(...person);

// let person={"title":"ABC",
//   age:10,
//   address:{
//     city:"XYZ"
//   }
// }
// //console.log(person);
// // let obj={...person};
// // obj.title="OBJ";
// // console.log(obj,person);
// // obj.address.city="A";
// // console.log(obj,person);
// // let obj={
// //   ...person,
// //   address:{
// //     ...person.address
// //   }
// // }
// // obj.address.city="A";
// // console.log(obj,person);

// //Objects --immutable
// //string
// ///let str="Data";
// //let str1=str.toLowerCase();
// //console.log(str1, str);
// //Map ->immutable
// // import { Map } from "immutable";
// // let book=Map({"title":"First Book",isPublished:false});
// // //console.log(book.get("title"));
// // book=book.set("isPublished",true);
// // console.log(book.toJS());
// //console.log(book);
// import { produce } from "immer";

// let book={"title":"First Book",isPublished:false};
// // let nbook= produce(book,(draftbook)=>{
// //   draftbook.isPublished=true;


// // })
// // console.log(nbook);

// function publishBook(book)
// {
//   const nbook=produce(book,(draftbook)=>{
//     draftbook.isPublished=true;
//   })
//   return nbook;
// }
// const nbook=publishBook(book);
// console.log(nbook,book)


// //MAP ->API ->SET OF FUNCTIONS
// //1. get, set, toJS
// // function publishBook(book)
// // {
// //     book.isPublished=true;

// // }
// // console.log(book);
// // publishBook(book);
// // console.log(book);



//REDUX
//Context -> Data 
//State->Class,functional
//Redux Store
/*

ACTIONS (event)
disptached->Store->reducer->update Store->Store
//bug tracking
//ADD_BUG, RESOLVE_BUG
object
{
  type:ACTION,//STRING, "bugAdded"
  //description:
  payload:{
    description:
  }

}
  dispatch
//LOGS

STORE -> STATE
object - array of objects
[
  {
    id:number,
    description:string,
    resolved:boolean
  }

]
  {
      bugs:[
      {}
      ],
      currentUser:{}


  }


REDUCER -> FUNCTION => state, action -> updated State
event handler
function BugReducer(state,action)
{
  if(action.type=="bugAdded")
  {

  }

  return state;

}

1. Design a Store
Object Type
2. Actions ->Objects
3. Reducer
4. Setup of store


*/

