import React, { useState } from 'react'
import "./style.css";
import axios from "axios";
import FetchMenu from './FetchMenu';
import { Routes, Route ,useNavigate,useLocation} from 'react-router-dom';

const Hello = () => {
let location = useLocation();
    const [formValues, setFormValues] = useState( [{ id: "", quantity : ""}])
    const [payloadBody, setPayloadBody] = useState({customerName: "", customerNumber: "",payload: []})
    const [data, setData] = useState({});
    const [isSubmitted, IsSubmitted] = useState(true);
    const [itemDetails, setitemDetails] = useState([]);

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { id: "", quantity: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        var { customerName, customerNumber } = document.forms[0];
        console.log(customerName.value);

       
        const config = {
          headers:{
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json; charset=utf-8'
          }
        };
        var audioUrl =  formValues;
        
        axios.post('http://localhost:8081/orderItems', 
        {
            customerName: customerName.value,
           phoneNumber: customerNumber.value,
           orderList : formValues
        }
          ,{config}).
          then((res) => {setData(res.data)
            setitemDetails(res.data.menuItemDetails);
            console.log(res.data.menuDataItems)});
            IsSubmitted(false);
    }

    
    const menuDataItems  = itemDetails.map(dataObj => 
      <tr key={dataObj.ItemName}>
      <td>{dataObj.ItemName}</td>
      <td>{dataObj.price}</td>
      <td>{dataObj.quantity}</td>
      <td>{dataObj.totalprice}</td>
      
    </tr>
      )

    //const  orderResponse =    <p>{data.customerName}) {data.phoneNumber} - {menuDataItems}</p>


    const orderResponse = (
      <div  className='container'>
        <div className='mt-3'>
          <h3>Order Details for Customer : {data.customerName} </h3>
          <table className='table'>
            <thead>
              <tr>
                <th>ITEMNAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTALPRICE</th>
              </tr>

            </thead>
            <tbody>
              {menuDataItems}
            </tbody>
          </table>
          -----------------------------------------------------------------------------------------------------------------------------------------------------------
          <table className='table'>
            <tbody>
              <tr><b>sgst</b><td>{data.sgst}</td></tr>
              <tr><b>cgst</b><td>{data.cgst}</td></tr>
              <tr><b>Total Taxed Bill : <td>{data.taxedTotalBill}</td></b></tr>
            </tbody>
          </table>
        </div>
      </div>
    );

      
    

    const navigate = useNavigate();
    const navigateHome = () =>{
      navigate('/home', {replace:true,state:{user:location.state.user}});
    }
    const navigateMenu = () =>{
      navigate('/about', {replace:true,state:{user:location.state.user}});
    }
    const navigateFrequency = () =>{
      navigate('/frequency', {replace:true,state:{user:location.state.user}});
    }
    const navigateLogin = (event) => {
      navigate('/', {state : {user : false}});
      
    };
  
    const userHTML = (
      <div>
<div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b>Order</b></div>
      
      <div className="topright"><button onClick={navigateLogin}>Logout</button></div>
    
      </div>
    )

    const adminHTML =(
      <div>
 <div className="navbar"><b><button onClick={navigateHome}>Home</button></b><b><button onClick={navigateMenu}>AddMenu</button></b><b>Order</b><b><button onClick={navigateFrequency}>BillFrequency</button></b></div>
 <div className="topright"><button onClick={navigateLogin}>Logout</button></div>
      </div>
     
    )
    return (
        
           <div  align="center">
            {
              location.state.user?userHTML:adminHTML
            }
             <div className="topleft"><FetchMenu/></div>
             {isSubmitted ?
           <form onSubmit={handleSubmit} className='move-bottom1'>
           <label>customerName : </label>
              <input type="text" name='customerName' />
             <div><label>customerNumber : </label>
              <input type="text" name='customerNumber' /></div> 
          {formValues.map((element, index) => (
            <div  className = 'move-left' key={index}>
              <label  >ItemId : </label>
              <input type="text" name="id" value={element.id || ""} onChange={e => handleChange(index, e)} />
              <label>Quantity : </label>
              <input type="text" name="quantity" value={element.quantity || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section move-left" >
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>:
        <div className='move-bottom1'>{orderResponse}</div>
        }
      </div>

    );
}

export default Hello