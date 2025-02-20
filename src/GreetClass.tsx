//1. create a class extends React.Component

import React from "react";

//2. class must have a render method which return tsx
type GreetProps={
    name:string;
}
type GreetState={
    isLoggedIn:boolean,
    years:number
}
class GreetClass extends React.Component<GreetProps,GreetState>
{
    state={isLoggedIn:false,years:10};

    clickHandler=()=>{
      //  alert("Clicked on Button");
      //this.setState({isLoggedIn:true,years:20});
    //   this.setState({years:this.state.years+1});
    //   this.setState({years:this.state.years+3});
    //   this.setState({years:this.state.years+2})
        this.setState((prevState)=>{return {years:prevState.years+1}})
        this.setState((prevState)=>{return {years:prevState.years+1}})
        this.setState((prevState)=>{return {years:prevState.years+1}})

    }
    //props //object
    render(){
        return (
            <>
            {this.state.years}
            {this.state.isLoggedIn?'Logged In':'Logged out'}
            <div>Class {this.props.name}</div>
            <button onClick={this.clickHandler}>Click me</button>
            </>
        )
    }

}
export default GreetClass;
