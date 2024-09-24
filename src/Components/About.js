import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import axios from "axios";
import "./style.css";
function About(){
  let location=useLocation()
const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  const config = {
    headers:{
      'Access-Control-Allow-Origin' : '*'
    }
  };


  
  var { uname, pass } = document.forms[0];


  axios.post('http://localhost:8081/addMenu', {
    name: uname.value,
   price: pass.value
    },{config})
  .then(function (response) {
console.log(response);
})

};

const renderForm = (
  <div class="img">

 
  <div align="center" >
    <form onSubmit={handleSubmit} className='move-bottom'>
      <div >
        <label >Item Name : </label>
        <input type="text" name="uname" required />
      </div>
      <div >
        <label>Price of Item : </label>
        <input type="text" name="pass" required />
      </div>
      <div >
        <input type="submit" value="ADD"/>
      </div>
    </form>
  </div>
  </div>
);




  const navigate = useNavigate();
const navigateHome = () =>{
  navigate('/home', {replace: true,state:{user:location.state.user}});

}
const navigateOrder = () =>{
  navigate('/order', {replace: true,state:{user:location.state.user}});
}
const navigateFrequency = () =>{
  navigate('/frequency', {replace: true,state:{user:location.state.user}});
}
 const navigateLogin = (event) => {
      navigate('/', {state : {user : false}});
      
    };
  return (
    
    <div>
         <div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b>AddMenu</b><b><button onClick={navigateOrder}>Order</button></b><b><button onClick={navigateFrequency}>BillFrequency</button></b></div>
         <div className="topright"><button onClick={navigateLogin}>Logout</button></div>
         <div>{renderForm}</div> 
    </div>
  );
}

export default About;
