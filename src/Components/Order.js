import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import axios from "axios";
import FetchMenu from './FetchMenu';
import "./style.css";
import Hello from './Hello';


const handleSubmit1 = (event) => {
  //Prevent page reload
  console.log("hello");
  event.preventDefault();
};

const renderForm = (

  <div >
    <form   onSubmit={handleSubmit1}>

        <label  align="center" text-align= "left">Please enter the name of the customer :</label>
        <input  align="center" type="text" name="uname" required />
   
      <div>
        <label align="center"  text-align= "left">Please enter the PhoneNumber of the customer:</label>
        <input  align="center" type="text" name="pass" required />
    </div>
   <div><Hello/></div>
   <div className="button-section">
              <button className="button submit" type="submit">Submit</button>
          </div>
    </form>
  </div>
);


export default function Order() {
  
  const navigate = useNavigate();
const navigateHome = () =>{
  navigate('/home', {replace: true});
}
  return (
    
    <div>
        <div className="topleft"><FetchMenu/></div>
         <div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b>RefreshMenu</b><b>AddMenu</b><b>Order</b></div>
      <h1>{renderForm}</h1>
    </div>
  );
}