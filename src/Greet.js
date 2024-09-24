import React from "react";

//function Greet() {
//    return <h1>hello world</h1>
//}

const Greet = props =>{ 
    console.log(props)
    return (
    <div><h1>Welcome {props.name1} </h1>
    {props.children}
    </div>
    )

} 
//return React.createElement(
  //  'div',
 //   {id:'hello',className:'dummyClass'},
 //   React.createElement('h1',null,"HELLO-WPRLD"));

export default Greet;