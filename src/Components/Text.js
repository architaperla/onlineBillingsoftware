import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React ,{useState} from "react";

const Text = ()=>{

    const [text,settext]=useState('');
    
    return(
        <div>
            <h1>Enter the text into text area</h1>
            <input onChange = {(event)=>settext(event.target.value)} type="textarea" ></input>
            <div>
                <h2>text summary</h2>
                <p>the length of the text entered is {text.length}</p>
            </div>

        </div>
    )
};
export default Text;