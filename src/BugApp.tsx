import { useRef, useState } from "react";
import BugList from "./BugList";
import { BUG_ADDED, store } from "./BugStore";
export interface BugType {
    id: number,
    description: string|undefined,
    resolved: boolean

}
let lastid=1;
const BugApp = () => {
  //  const [bugs, setBugs] = useState<BugType[] >([]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const addHandler = () => {
        store.dispatch({
            type:BUG_ADDED,
            payload:{
                description:inputRef.current?.value
            }
        })
       // setBugs(store.getState());

        // const existingBugs=[...store.getState()];
        // existingBugs.push({
        //     id:lastid++,
        //     description:inputRef.current?.value,
        //     resolved:false
        // })
       // setBugs(existingBugs);



    }
    // const resolveHandler=(id:number)=>{
    //     const existingBugs=bugs.map((item)=>{
    //         if(item.id==id)
    //             item.resolved=true;

    //         return item;
    //     })
    //     setBugs(existingBugs);

    // }
    return (
        <>
            <input className="border" ref={inputRef} type="text" />
            <button onClick={addHandler} className="bg-red-400 text-white p-2 rounded-md">Add</button>
            <BugList/>

        </>
    )

}
export default BugApp;