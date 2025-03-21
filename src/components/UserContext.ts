import { createContext } from "react";
import { UserType } from "./UserDashboard";
export const UserContext=createContext<UserType|undefined>(undefined);
