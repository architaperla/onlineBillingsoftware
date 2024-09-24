import  React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import FetchMenu from './FetchMenu';
import { Routes, Route ,useNavigate, useLocation} from 'react-router-dom';

export default function Home() {
  let location = useLocation();

  console.log("Helooooooooooooooo "+[location.state.user]);
const [isSubmitted, IsSubmitted] = useState(true);
const navigate = useNavigate();
const navigateMenu = () =>{
  navigate('/about', {state : {user : location.state.user}});
}
const navigateOrder = () =>{
    navigate('/order', {state : {user : location.state.user}});
  }

  const navigateFrequency = () =>{
    navigate('/frequency', {state : {user : location.state.user}});
  }
  const navigateLogin = (event) => {
    navigate('/', {state : {user : false}});
    
  };

  const userHtml = (
    <div>
    <div className="navbar"><b>Home</b><b><button onClick={navigateOrder}>Order</button></b></div>
    <div className="topright"><button onClick={navigateLogin}>Logout</button></div>
    <div className="topleft "><FetchMenu/></div>
    </div>
  );

  const adminHtml = (
    <div>
      <div className="navbar"><b>Home</b><b><button onClick={navigateMenu}>AddMenu</button></b><b><button onClick={navigateOrder}>Order</button></b><b><button onClick={navigateFrequency}>BillFrequency</button></b><div className="topright"><button onClick={navigateLogin}>Logout</button></div>
</div>
      
      <div className='topleft' ><FetchMenu/></div>
      
   
    </div>
  
  )
  
  return (
    <div >{
      location.state.user ?
      userHtml:adminHtml
      }
    </div>
  );
}