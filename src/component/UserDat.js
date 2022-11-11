import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";


function Get(){
    const [user,fetUser]=useState([])
      
   /*
   //get dat usin fetch
   const Dat =()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
       .then((res)=>res.json())
        .then((res)=>{
        fetUser(res)

        })

    }
*/ 
// get data using axios 
    const Dat =()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
       //.then((res)=>res.json())
        .then((res)=>{
        fetUser(res.data)

        })

    }

useEffect(()=>{

  Dat()

},[])
      
   return(
     <div>
      <p>this is the resulta of fetch</p>
       <ul>{user.map((item,index)=>{
          return <li key={index}>{item.name}</li>
       })}</ul>

     </div>

   )



}

export default Get;
