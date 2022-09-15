import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ViewStatus extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-light" style={{backgroundColor:"red"}}>
                <span className="navbar-brand mb-0 h1"><h4>User Portal</h4></span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item5 active">
                        <Link className="nav-link" to="/getvaccantroom" style={{color:"black"}}><h6>BookRoom</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item6 active">
                        <Link className="nav-link" to="/viewImages" style={{color:"black"}}><h6>ViewImages</h6></Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item7 active">
                        <Link className="nav-link" to="/" style={{color:"black"}}><h6>Logout</h6></Link>
                    </li>
                </ul> 
            </nav>
            {/* keep div for image here */}
            <div  style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/04/15/11/46/hotel-1330846_960_720.jpg)", height:700,backgroundSize:1500}}>
            <h2 className="text-center">Booking Successfull</h2>
            <h4 className="text-center">Thanks for Booking</h4>

            {/* <div className="card col-md-6 offset-md-3" style={{backgroundColor:"pink"}}>
                 <div className="card-body">
                    <div className="row">
                        <h3 style={{color:"green"}}>Your Booking is Successfully</h3>
                        </div><br/>
                        <h4 style={{color:"blue"}}>Thanks for Booking!!..</h4>
                    
                </div> */}
            {/* </div> */}
            </div>
           </div>
        )
    }
}  