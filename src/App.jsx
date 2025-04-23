import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import Videoplayer from './pages/videoplayer/videoplayer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const navigate=useNavigate();
  
  useEffect(()=>{

    onAuthStateChanged(auth ,async(user)=>{
      if(user){
        console.log("logged in")
        navigate("/")
      }
      else{
        console.log("loout")
        navigate("/login")
      }

    })
  },[])

  return (
    <div>

<ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/player/:id' element={<Videoplayer/>}></Route>

        


      </Routes>
      

    </div>
  )
}

export default App
