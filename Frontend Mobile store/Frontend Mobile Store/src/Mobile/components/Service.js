import React from 'react';
import'./Service.css'
import {Link} from 'react-router-dom' 


export default function Services() {
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
                  <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",height:"893px",backgroundSize:1550}}>
           
            <h2 id ="home" style={{color:"purple"}}>Our Services</h2><br/><br/>


   

<div className="card-deck" >

<div className="card text-white bg-warning mb-3">
    <div className="card-body"style={{color:"indigo"}}>
      <h5 className="card-title"> <i className="fa fa-user-plus" aria-hidden="true"> <u>Help Care </u></i> </h5>
      <p className="card-text">Customer support falls under the customer service umbrella yet prioritizes customers who have trouble or require assistance with a product or service they purchased</p>
     
    </div>
  </div>

  <div className=" card text-white bg-warning mb-3">
    
    <div className="card-body"  style={{color:"indigo"}}>
      <h5 className="card-title"> <i className="fa fa-shopping-bag" aria-hidden="true"><u>Genuine Products</u> </i> </h5>
      <p className="card-text">We are providing best no 1 trust and Genuine product to our customers</p>
      
    </div>
  </div>

  <div className="card text-white bg-warning mb-3">

    <div className="card-body"style={{color:"indigo"}}>
      <h5 className="card-title"> <i className="fa fa-truck" aria-hidden="true"> <u>Fast Delivery </u></i></h5>
      <p className="card-text">You can experience fast delivey of your products with safe and secure</p>
      
    </div>
  </div>
  

  <div className="card text-white bg-warning mb-3">
    <div className="card-body"style={{color:"indigo"}}>
      <h5 className="card-title"> <i className="fa fa-mobile" aria-hidden="true" > <u>Call</u></i></h5>
      <p className="card-text"><b>22344-555</b><br></br></p>
      <h5 className="card-title"> <i className="fa fa-envelope" aria-hidden="true" > <u>Mail </u></i></h5>
      <p className="card-text"><b>Mobilestore@gmail.com</b><br></br></p>
      <h5 className="card-title"> <i className="fa fa-address-book" aria-hidden="true" > <u>Contact Us </u></i></h5>
      <p className="card-text"><b>02/86,Gandhi road,<br></br>Chennai-600001</b><br></br></p>
    </div>
  </div> 
</div>
</div>
</div> 
    )
}
