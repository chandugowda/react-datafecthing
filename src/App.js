import React from "react";
import "./style.css";
import React,{ useState, useEffect } from "react";
import { data } from "./data.js";
import datas from "./data.json";

const url ="https://api.github.com/users";

 function App() {
     const [guser,setGusers]= useState([]);
     
      async function getData(){
      const response= await fetch(url);
      const users= await response.json();
      console.log(users);
      setGusers(users);
      }
      useEffect(()=>{
        getData(),[]
      }); 
  return <>
  { 
   /* 
      datas.map(dataList =>{
      console.log(dataList);
      return <>
      <li> {dataList.empid} </li>
      <li>{dataList.empname} </li>
      </>
    })
    */     
      guser.map((user)=>{
        return <>
        <li>{user.login} </li>
        </>
      }) 

  }

  </>

 

}
export default App;