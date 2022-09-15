import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RoomServices from '../../services/RoomServices'


export default class ViewAllRooms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rooms :[]
        }
        this.addRoom =this.addRoom.bind(this);
        this.editRoom =this.editRoom.bind(this);
        this.deleteroom=this.deleteroom.bind(this);
    }

    deleteroom(roomId){
        RoomServices.deleteRoom(roomId).then(res=>{
            this.setState({rooms:this.state.rooms.filter(room =>room.roomId !== roomId )})
        })
  }
    
    editRoom(roomId){
        this.props.history.push(`/addroom/${roomId}`);
    }

    componentDidMount(){
        RoomServices.getallroom().then((res)=>{
            this.setState({rooms:res.data})
        })
    }
    addRoom(){
        this.props.history.push('/addroom/-1');
    }
    render() {
        return (
            <div>

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
            </nav>   <br/> 

             <button  onClick={this.addRoom} className="btn btn-primary">Add Room</button>
            <table className ="table table-striped">
  <thead>
    <tr>
      <th >RoomId</th>
      <th >RoomType</th> 
      <th >RoomCost</th>
      <th >Status</th>
        <th>Actions</th>
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
                      <button onClick ={ () => this.editRoom(room.roomId)} className = "btn btn-success">Update</button>
                      <button onClick={()=> this.deleteroom(room.roomId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
              </tr>
              
          )
      }
      
  </tbody>
     </table>
         
         </div>
        )
    }
}
