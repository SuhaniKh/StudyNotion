import React from 'react'
import signup from "../assets/signup.png"
import Template from '../components/Template'

const SignUp = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today , tommorow , and beyond"
        desc2="Educate to future proof your carrer"
        image={signup}
        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default SignUp
