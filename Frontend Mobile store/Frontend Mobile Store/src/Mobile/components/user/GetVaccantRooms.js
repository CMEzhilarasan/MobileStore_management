import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RoomServices from '../../services/RoomServices'

export default class GetVaccantRooms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms :[]
        }
        this.editpayment = this.editpayment.bind(this);
    }

editpayment(roomId){
    this.props.history.push(`/payment/${roomId}`)
}
    componentDidMount(){
        RoomServices.getvaccantroom().then((res)=>{
            this.setState({rooms:res.data})
        })
    }
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
            </nav>  <br/>

    <div className="card-body">
 <table className="table table-striped table-bordered">
  <thead>
    <tr>

      <th >RoomId</th>
      <th >RoomType</th> 
      <th >RoomCost</th>
      <th >Status</th>
      <th>Book Room</th>
     </tr>
  </thead>
  <tbody>
      {
          this.state.rooms.map((room) =>
              <tr key={room.roomId}>
                   <td>{room.roomId}</td> 
                  <td>{room.roomType}</td>
                  <td>{room.roomCost}</td>
                  <td>{room.isOccupied}</td>
                  <td>
                      <button onClick={()=> this.editpayment(room.roomId)} className="btn btn-primary">Book Now</button>
                      </td>
              </tr>
              
          )
      }
      
  </tbody>

                    </table>
                    </div>
            </div>
        )
    }
}
