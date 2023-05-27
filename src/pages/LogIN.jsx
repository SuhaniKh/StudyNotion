import React from 'react'
import Template from '../components/Template'
import login from "../assets/login.png"

const LogIN = ({setLoggedIn}) => {
  console.log("hello");
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today , tommorow , and beyond"
        desc2="Educate to future proof your carrer"
        image={login}
        formtype="Login"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default LogIN
