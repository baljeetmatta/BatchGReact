import { useParams } from "react-router-dom";

const Contact=()=>{
    const params=useParams();//object->city
    return (
        <>
        {params.city}
        <div>Contact us page</div></>
    )
}
export default Contact;