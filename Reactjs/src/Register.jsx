import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [user, setUser]= useState({})

const handleRegister = async()=>{
  const obj = {
    user
  };
   await axios.post("http://localhost:5001/registered", obj);
   setUser({})
}
  return (
    <div>
      <h3>Registration Form</h3>
      <p>
        <input type="text" 
        onChange={(e)=>setUser({...user, name: e.target.value})}
        placeholder="Name" />
      </p>
      <p>
        <input type="text"
        onChange={(e)=>setUser({...user, email: e.target.value})}
        placeholder="Email" />
      </p>
      <p>
        <input type="password" 
        onChange={(e)=>setUser({...user, password: e.target.value})}
        placeholder="Password" />
      </p>
      <button onClick={handleRegister}>Register</button>
      <p>
        <Link to="/login">Already a member? Login here</Link>
      </p>
    </div>
  );
}