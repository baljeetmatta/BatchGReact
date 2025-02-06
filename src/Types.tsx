import jsonData from "./data.json";

const Types=()=>{
    //variable
    //let data=10;
    //let data:number=10;
    let data="Test";
    //array
    let arrData:string[]=["First","Second","Third"];

    // let obj:{name:string,age:number}={
    //     name:"First",
    //     age:23
    // }
    type ObjectType={
        name:string,
        age:number
    }
    let obj:ObjectType={
        name:"First",
        age:20
    }
    //array of object
    //let arrObj:ObjectType[]=jsonData;
    return (
        <>
        <div>
                value is {data}
            {/* {arrData} */}
            {
                arrData.map((item)=>{
                    return <p>{item}</p>
                })
            }
            {
                jsonData.map((item)=>{
                    return <p>{item.name}</p>
                })
            }

            {obj.name} -{obj.age}
        </div>
        </>
    )
}
export default Types;