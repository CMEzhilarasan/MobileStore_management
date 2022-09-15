import React from 'react'
import './Home.css'
// import { FaHome,FaRegistered} from 'react-icons/fa'
// import {FcServices} from 'react-icons/fc'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light" style={{backgroundColor:"blue"}}>
                <span class="navbar-brand mb-0 h1"><h4>Mobile Store Management</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"white"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"white"}}><h6>Services</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"white"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"white"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>
            <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)",height:800,backgroundSize:1800}}>     
    <h1 id="home" style={{color:"purple"}}>WELCOME TO MOBILE STORE </h1>
   {/* <img src="https://cdn.pixabay.com/photo/2019/07/23/09/49/hotel-4357159_960_720.jpg" class="" alt="..."  width="1350px" height="800px" />  */}
   
  </div> 
 </div> 
    )
}

