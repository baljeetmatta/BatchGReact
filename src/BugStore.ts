//1. Design a Store

import { createStore } from "redux";

/*
    State ->Type->Structure
    Bugs
    [
        { 
            Type Define
        }
    ]
    {
        bugs:[],
        currentUser:{}
    }
        //multiple reducer


type StateType={


}
    {
        id:number,
        description:string,
        resolved:boolean
    }
*/
type BugType={
    id:number,
    description:string|undefined,
    resolved:boolean
}
//2. Actions/ Objects
/*
types
BUG_ADDED
BUG_RESOLVED
    {
        type:string,
        payload:{
            description?:string
            id?:number
        }
    }

*/
export const BUG_ADDED="bugAdded";
export const BUG_RESOLVED="bugResolved";
type ActionType={
    type:string,
    payload:{
        description?:string,
        id?:number
    }
}
//3. Reducer
//FIRST ARGUMENT EXISTING STATE
//MUST RETURN UPDATED STATED
//UNDEFINED
let lastid=1;
function BugReducer(state:BugType[]=[],action:ActionType)
{

        if(action.type==BUG_ADDED)
        {
                const existingBugs=[...state];
                existingBugs.push({
                    id:lastid++,
                    description:action.payload.description,
                    resolved:false,
                })
                return existingBugs;

        }
       else if(action.type==BUG_RESOLVED)
        {
            const existingBugs=state.map((item)=>{
                if(item.id==action.payload.id)
                    item.resolved=true;

                return item;
            })
            return existingBugs;

        }
else
        return state;

}
//4. Setup a Store
export const store=createStore(BugReducer);

//Test the Store

//console.log(store.getState());

