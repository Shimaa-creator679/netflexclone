import React, { useEffect } from 'react'
import Home from './pages/home/Home'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import Videoplayer from './pages/videoplayer/videoplayer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer} from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  const navigate=useNavigate();
  
  useEffect(()=>{

    onAuthStateChanged(auth ,async(user)=>{
      if(user){
    
        navigate("/")
      }
      else{
      
        navigate("/login")
      }

    })
  },[])

  return (
    <div>
<BrowserRouter>
<ToastContainer theme='dark' />

   <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/player/:id' element={<Videoplayer/>}></Route>

        


      </Routes>
</BrowserRouter>
   
      

    </div>
  )
}

export default App
