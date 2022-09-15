import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ViewImages extends Component {
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
            <br/>
            
 {/* <div style={{backgroundColor:"lightpink"}}>  */}

<div class="card-group">
  
  <div class="card">
    <img src="https://i.pinimg.com/originals/45/3f/1a/453f1a6859e13ae5608e24de26a796b5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Single Bed</h5>
      <Link to ="/getvaccantroom" class="btn btn-primary">click here</Link>
    </div>
  </div>

  <div class="card">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/ee/46/c4/ex-double-bed-room.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Double Bed</h5>
      <Link to ="/getvaccantroom" class="btn btn-primary">click here</Link>
    </div>
  </div>
  <br/>

  <div class="card">
    <img src="https://www.sakuravillage.com/userfiles/triple_bed_room_with_aircon_1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Triple</h5>
      <Link to ="/getvaccantroom" class="btn btn-primary">click here</Link>
      </div>
  </div>
</div><br/>
<div class="card-group">
  <div class="card">
    <img src="https://i.pinimg.com/originals/45/3f/1a/453f1a6859e13ae5608e24de26a796b5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Single Bed</h5>
      <Link to ="/getvaccantroom" class="btn btn-primary">click here</Link>
    </div>
  </div>

  <div class="card">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/ee/46/c4/ex-double-bed-room.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Double Bed</h5>
      <Link to ="/getvaccantroom" class="btn btn-primary">click here</Link>
    </div>
  </div>
  <br/>

  <div class="card">
    <img src="https://www.sakuravillage.com/userfiles/triple_bed_room_with_aircon_1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Triple</h5>
      <Link to ="/getvaccantroom" class="btn btn-primary">click here</Link>
      </div>
  </div>

</div>
  


  

            


            </div>
        )
    }
}
