import { useEffect, useState } from "react";
import { BugType } from "./BugApp"
type BugProps={
    bugs:BugType[]
    set:(args:BugType[])=>void;
}
import { store } from "./BugStore";
//const BugList=(props:BugProps)=>{
    
    const BugList=()=>{
        const [bugs,setBugs]=useState<BugType[]|undefined>(undefined)
        useEffect(()=>{

            //setBugs(store.getState())
            store.subscribe(()=>{
                setBugs(store.getState())
            })



        },[])

    const resolveHandler=(id:number)=>{
        //const existingBugs=[...props.bugs];
        const updateBugs=bugs?.map((item)=>{
            if(item.id==id)
                item.resolved=true;
            return item;
        })
        setBugs(updateBugs);
        

    }

    return (

        <div className="container grid grid-cols-4 gap-3">
            {
                bugs?.map((item)=>{
                    return (
                            <div className="flex gap-4 bg-gray-200 p-3">
                                    <div>{item.description}</div>
                                    <div>{item.resolved?"Resolved":<button onClick={()=>{resolveHandler(item.id)}} className="bg-red-400 text-white p-2 rounded-md">Resolve</button>}</div>

                            </div>
                    )
                })
            }
            </div>
    )
}
export default BugList;