import React from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profileicon from '../../assets/profile_img.png'
import profileimg from '../../assets/caret_icon.svg'
import './navbar.css'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase'

const Navbar = () => {
  return (
    <div className='navrow'>
        
        <div className="left">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="links">
                <ul>
                    <li><a href=''>home</a></li>
                    <li><a href=''>tvshow</a></li>
                    <li><a href=''>movies</a></li>
                    <li><a href=''>new&popular</a></li>
                    <li><a href=''>mylist</a></li>
                    <li><a href=''>browse by language</a></li>
                </ul>
            </div>
        </div>
        <div className="right">
            <img src={search} alt="" />
            <p>children</p>
            <img src={bell}></img>
            <div className="profile-icons">
                <img src={profileicon}></img>
             <button onClick={()=>{logout()}}>sign out</button>
                <img src={profileimg}></img>
            </div>
        </div>
    </div>
  )
}

export default Navbar