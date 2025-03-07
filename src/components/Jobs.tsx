import { NavLink, useLoaderData } from "react-router-dom";
//import jobsData from "../jobs.json"
export interface JobsType{
    id:number,
    title:string,
    description:string,
    package:string
}
const Jobs=()=>{
    //const data=useLoaderData();
    const data=useLoaderData<JobsType[]>()

    return (
        <>
        {/* {data} */}
        <div>Jobs Data</div>
        <div className="container">
            <div className="grid grid-cols-4 gap-4">
                {
                    data.map((item)=>{
                        return (
                            
                            <div className="bg-gray-100">
                               <NavLink to={`/jobdetails/${item.id}`}> <div>{item.title}</div></NavLink>
                                <div>{item.description}</div>
                                </div>
                        )
                    })
                }

            </div>
        </div>

        </>
    )
}
export default Jobs;
export const fetchJobs=async ()=>{
    //return "Hi";
    // fetch("/jobs.json").then((response)=>{
    //     return response.json();
    // }).then((response)=>{
    //     return response;
    // })
  const response= await fetch("/jobs.json");
  const output=await response.json();
    return output;
}