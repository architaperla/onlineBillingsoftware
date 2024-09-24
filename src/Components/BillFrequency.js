import  React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import FetchMenu from './FetchMenu';
import axios from "axios";
import { Routes, Route ,useNavigate,useLocation} from 'react-router-dom';
function BillFrequency() {
const [frequency, setfrequency] = useState();
const [isSubmitted, IsSubmitted] = useState(true);
const [itemDetails, setitemDetails] = useState([]);
const[fetch,setfetch]=useState(false);
const navigate = useNavigate();
let location = useLocation();
const [data,setdata]=useState({});
const navigateMenu = () =>{
  navigate('/about', {replace:true,state:{user:location.state.user}});
}
const navigateOrder = () =>{
    navigate('/order', {replace:true,state:{user:location.state.user}});
  }
  const navigateHome = () =>{
    navigate('/home', {replace:true,state:{user:location.state.user}});
  
  }
  const navigateLogin = (event) => {
    navigate('/', {state : {user : false}});
    
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(frequency);

    const config = {
        headers:{
          'Access-Control-Allow-Origin' : '*'
        }
      };
    
    
      axios.post('http://localhost:8081/frequency', {
        frequency
        },{config}).
        then((res) => {setdata(res.data)
          setitemDetails(res.data.billFrequencyItems);
        console.log("bill total income "+res.data.totalIncome)});
      

console.log("vhdw"+data);
setfetch(true);
}


  const setRadioValue = (e) => {
    setfrequency(e.target.value);
}
  
  const orderResponse = (
  <div >
<form onSubmit={handleSubmit} >
<h1>select any option given below</h1>
<div>
     <label >summary based on day : </label>
        <input type="radio"  id="day" name="summary"  value='day' required  onClick={setRadioValue} />
 </div>
 <div >
     <label >Summary based on week : </label>
        <input type="radio" id="week" name="summary"  value='week' required   onClick={setRadioValue}/>
 </div>
 <div >
     <label >summary based on month : </label>
        <input type="radio" id="month"  name="summary"  value='month' required  onClick={setRadioValue} />
 </div>
 <div >
     <label >summary based on year : </label>
        <input type="radio" id="year"  name="summary" value='year' required  onClick={setRadioValue} />
 </div>
 <div >
        <input type="submit" name="submit" value="FETCH"/>
      </div>


</form>

  </div> 
  );

  const menuDataItems  = itemDetails.map(dataObj => 
    <tr key={dataObj.itemName}>
    <td>{dataObj.itemName}</td>
    
    <td>{dataObj.quantity}</td>
    <td>{dataObj.totalPrice}</td>
    
  </tr>
    )

  const orderResponse1 = (
    <div className='login'>
 <div  className='container login-form'>
      <div className='mt-5 p-5'>
       <div className='freq'>
        <table className='freq'>
          <thead>
            <tr className='padding'>
              <th> ITEMNAME </th>
             
              <th className='padding'>  QUANTITY </th>
              <th className='padding'>TOTALPRICE</th>
            </tr>

          </thead>
          <tbody>
            {menuDataItems}
          </tbody>
        </table>
        

        
       ------------------------------------------------------------------
       
          <table className='freq1'>
            <tbody>
              <tr><b>Total Generated Income : <td>{data.totalIncome}</td></b></tr>
            </tbody>
          </table>
          </div>
      </div>
    </div>
    </div>
   
  );
  return (
    <div >
      
        <div>
        <div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b><button onClick={navigateMenu}>AddMenu</button></b><b><button onClick={navigateOrder}>Order</button></b><b>BillFrequency</b></div>
        <div className="topright"><button onClick={navigateLogin}>Logout</button></div>
        
        {fetch ?orderResponse1:<div  className='topleft'>{orderResponse}</div>}
        </div>

    </div>
  );
  }
  export default BillFrequency;
