import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { JobsType } from "./Jobs";
const JobDetails=()=>{
    const data:JobsType=useLoaderData<JobsType>();

    return (
        <>
        <div className="container">
            <div>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>{data.package}</div>
                
              

            </div>
        </div>
        
        </>
    )


}

export default  JobDetails;
export const fetchJobDetails=async ({params}:LoaderFunctionArgs)=>{
 //  const id:number=parseInt(params.id);
const id=Number(params.id);

  const response= await fetch("/jobs.json");
  const output:JobsType[]=await response.json();
  const filterOutput=output.filter((item)=>{
    if(item.id==id)
        return true;

  })
  console.log(filterOutput[0]);

    return filterOutput[0];
}
