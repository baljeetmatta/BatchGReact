type ButtonProps={
    value:string,
    click:(e:React.MouseEvent)=>void
}
const Button=(props:ButtonProps)=>{
    //clickHandler
    const clickHandler=(e:React.MouseEvent,id:number)=>{
        alert("Button Clicked");
    }
    return (
        <>
        <button onClick={(e:React.MouseEvent)=>{alert('tesst')}}>Test</button>
        <button onClick={(e:React.MouseEvent)=>{ clickHandler(e,1)}}>Click</button>
        <button onClick={props.click}>{props.value}</button>
        </>
    )
}
export default Button;
