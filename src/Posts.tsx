import { useEffect, useRef, useState } from "react"
type PostType={
    id:number,
    title:string,
    body:string
}
const Posts=()=>{
    const [post,setPost]=useState<PostType[]|undefined>(undefined);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState<string|null>(null)
    const [page,setPage]=useState(0);
    const abortRef=useRef<AbortController|undefined>(undefined);



    useEffect(()=>{
       
        const fetchData=()=>{
            abortRef.current?.abort();
            abortRef.current=new AbortController();

            setLoading(true);
            setError(null);
            fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`,
                {signal:abortRef.current?.signal}
            )
            .then((response)=>{
                return response.json();
            })
            .then((response)=>{
                setLoading(false);

                setPost(response);
    
            }).catch((ex)=>{
                console.log(ex);

                //setLoading(false);
                //setError("Error in loading...");
               

            });
        }
        fetchData();
       // setTimeout(fetchData,1000);


//once
    },[page])

    // if(isLoading)
    // return <div>Loading...</div>

    // if(error)
    //     return <div>{error}</div>

    return (
        <>
        <button onClick={()=>{setPage(page+1)}} className="bg-red-200 p-2 rounded-md">Next- {page}</button>
        <table>

            {
                post?.map((item)=>{
                    return (
                        <tr><td>{item.title}</td><td>{item.body}</td></tr>
                    )
                })
            }
        </table>
        
        </>
    )

}
export default Posts;