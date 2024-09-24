import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchOrderBill() {
  const url = "http://localhost:8081/menu";
  const [data, setData] = useState([]);

  const config = {
    headers:{
      'Access-Control-Allow-Origin' : '*'
    }
  };

  const fetchInfo = () => {
    return axios.get(url,config).then((res) => {setData(res.data)
    console.log(res.data)});
  };

  useEffect(() => {
  fetchInfo()
  }, []);



  const  menuDataItems = data.map(dataObj => 
    <ui key={dataObj.menuId}>
      <p>{dataObj.menuId}) {dataObj.menuItemName} - {dataObj.menuItemPrice}</p>
    </ui>
  )

  return (
    <div text-align = "left">
    <h1 className="text-success">MenuItems</h1>
      <ul>{menuDataItems}</ul>
    </div>
  );
}

export default FetchOrderBill;