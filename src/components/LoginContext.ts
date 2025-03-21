import { createContext } from "react"

export type LoginType={
    name:string|undefined,
    setName:(args:string|undefined)=>void

}
export const LoginContext =createContext<LoginType|undefined>(undefined);

