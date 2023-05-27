import React, { useState } from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import LogIN from './pages/LogIN'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const [isLoggedIn , setLoggedIn] = useState(false);
  return (
    <div className='w-screen h-screen bg-slate-900  flex flex-col overflow-x-hidden'>
      <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/LogIn' element = {<LogIN setLoggedIn={setLoggedIn}/>} />
          <Route path='/SignUp' element = {<SignUp setLoggedIn={setLoggedIn}/>} />
          <Route path='/Dashboard' element = {
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          } />
      </Routes>
    </div>
  )
}

export default App

