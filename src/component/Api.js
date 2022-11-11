import React, { useEffect, useState} from 'react'
import axios from "axios";
const style = {
    backgroundCcolor:"rgb(158, 227, 133)",
    width:"40%",
    margin: "4px auto",
    padding:"10px",
    border: "1px solid green",
    borderRadius: "4px",
    boxShadow:"8px rgb(210, 217, 208)"
}





function Api(){
    const[utilisateurs,setUtilisateurs]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setUtilisateurs(res.data)})},[])
    return(

        <div>
            <h1>nombre d'utilisateurs: {utilisateurs.length}</h1>
            
            {utilisateurs.map(user=>{
                return(
                    <div className='child'style={style}key={user.id}>
                    <h3 style={{color:"rgb(92, 62, 3)"}}>nom: {user.name}{user.username}</h3>
                    <p>email:{user.email}</p>
                    <p>ville:{user.address.city}</p>
                    <p>rue:{user.address.street}</p>
                    </div>)
                })
                }
                </div>
               
        )
    





}

export default Api;