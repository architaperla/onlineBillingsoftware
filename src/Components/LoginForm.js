import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react-dom";


import "./style.css";
import FetchMenu from "./FetchMenu";
import { Routes, Route ,useNavigate} from 'react-router-dom';


function LoginForm() {
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, IsSubmitted] = useState(false);
  const [isUser, IsUser] = useState(false);
    const [isShown, setIsShown] = useState(false);
    
const navigate = useNavigate();
const navigateMenu = () =>{
  navigate('/about',{state : {user : isUser}});
}
const navigateHome = () =>{
  navigate('/home',{state : {user : isUser}});
}
const navigateOrder = () =>{
  navigate('/order', {state : {user : isUser}});
}
const navigateFrequency = () =>{
  navigate('/frequency', {state : {user : isUser}});
}

  // User Login info
  const database = [
    {
      username: "user",
      password: "userpass"
    },
    {
      username: "admin",
      password: "adminpass"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } 
      else {
        
        if (uname.value==='user')
        {
          IsUser(true);
        }
        IsSubmitted(true);
       
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const setLogin = (event) => {
    //Prevent page reload
    event.preventDefault();
    IsUser(false);
    IsSubmitted(false);
    
  };

  const handleAddMenu = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    const handleClick = event => {
      setIsShown(current => !current);
    };
    
  };
  

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div class="login ">
    <div  align="center" className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <h1 class="style">Login </h1>
          <label class="align" >Username :</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label class="align">Password: </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    </div>
  );


  const userHtml = (
    <div>
    <div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b><button onClick={navigateOrder}>Order</button></b></div>
    <div className="topright"><button onClick={setLogin}>Logout</button></div>
    <div className="topleft"><FetchMenu/></div>
    </div>
  );

  const adminHtml = (
    <div>
    <div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b><button onClick={navigateMenu}>AddMenu</button></b><b><button onClick={navigateOrder}>Order</button></b><b><button onClick={navigateFrequency}>BillFrequency</button></b></div>
    <div className="topright"><button onClick={setLogin}>Logout</button></div> 
    <div className="topleft"><FetchMenu/></div>
    </div>
  
  )


const uservar = isSubmitted && isUser;


  return (

 
    
    <div >
      {
        uservar ?
        userHtml:
        (
          isSubmitted ?
          adminHtml:
          renderForm
        )
        
      }


    </div>
  );
}

export default LoginForm;