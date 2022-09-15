import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AdminHome.css'

export default class AdminHome extends Component {
    render() {
        return (
            <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_960_720.jpg)",height:800,backgroundSize:1500}}>
                
                 <nav className="navbar navbar-light" style={{backgroundColor:"red"}}>
                <span className="navbar-brand mb-0 h1"><h4>Admin Portal</h4></span>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item8 active">
                        <Link  className="nav-link" to="/viewuser" style={{color:"black"}}><h6>ViewUsers</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item9 active">
                        <Link  className="nav-link" to="/viewpayment" style={{color:"black"}}><h6>ViewPayments</h6></Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item10 active">
                        <Link  className="nav-link" to="/viewstaff" style={{color:"black"}}><h6>ViewStaffs</h6></Link>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item11 active">
                        <Link  className="nav-link" to="/viewroom" style={{color:"black"}}><h6>ViewRooms</h6></Link>
                    </li>
                </ul>
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item12 active">
                        <Link  className="nav-link" to="/" style={{color:"black"}}> <h6>Logout</h6></Link>
                    </li>
                </ul> 
            </nav>  
            <h1 id="home" style={{color:"red"}}> Welcome To Admin portal</h1>
            </div>
        )
    }
}
