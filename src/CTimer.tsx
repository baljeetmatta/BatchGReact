import React from "react";
type SProps={}
type SState={
    count:number;
}
class CTimer extends React.Component<SProps,SState>
{
    state={count:1};
    // constructor(props:SProps){
    //     super(props);
    //     setInterval(this.timerTick,1000);
    // }
    componentDidMount(): void {
        setInterval(this.timerTick,1000);
    }
    timerTick=()=>{
        this.setState({count:this.state.count+1});
        console.log("Hi");

    }

    render(){
        return (
            <>
            {this.state.count}
            </>
        )
    }
}
export default CTimer;

/*
function test()
{
    function dummy()
    {

    }
    dummy();
    //this -- created by regular function 
    // - reference to the caller 
}
    */
