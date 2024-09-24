import React, { useState, useEffect } from "react";
import axios from "axios";



function HookObject() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [name, setName] = useState({firstName:'',lastName:''});
  
    return (
            <form>

<input type="text"
value={name.firstName}
onChange={e => setName({...name,firstName : e.target.value})}


></input>
<input type="text"
value={name.lastName}
onChange={e => setName({...name,lastName : e.target.value})}

></input>
<h2>
    your firstName is : {name.firstName}
</h2>

<h2>
    your lastName is : {name.lastName}
</h2>
            </form>   
    )
}
export default HookObject;