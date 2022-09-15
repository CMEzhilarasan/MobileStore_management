import React from 'react'
import {Link} from 'react-router-dom'
import './Book.css'

export default function Book() {
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
            <div style={{backgroundImage:"url(https://images.wallpaperscraft.com/image/bed_balcony_table_chairs_view_hotel_room_39688_1920x1200.jpg)",height:800,backgroundSize:1400}}>
            
                <h2 style={{textAlign:"center" ,color:"red"}}>Welcome to User portal</h2>

            </div>
        </div>
    )
}
