// import React, { Component } from 'react'
// import  RoomServices from '../../services/RoomServices'

// export default class UpdateRooms extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              "roomId":this.props.match.params.roomId,
//              "roomType":'',
//              "roomCost":'',
//              "isOccuiped":""
//         }
//         this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
//         this.changeRoomCostHandler = this.changeRoomCostHandler.bind(this); 
//         this.changeIsOccupiedHandler = this.changeIsOccupiedHandler.bind(this);
//     }
//     componentDidMount(){
//         RoomServices.getRoomById(this.state.roomId).then((res) =>{
//             let room = res.data;
//             this.setState({roomType:room.roomType,
//                 roomCost:room.roomCost,
//                 isOccupied:room.isOccupied
 
//                 });
//         });
        


//     }

//     updateroom=(e)=>{
//         e.preventDefault()
             
//              let room ={roomType:this.state.roomType, roomCost:this.state.roomCost, isOccupied:this.state.isOccupied  }
//         console.log('room =>' +JSON.stringify(room));
//         RoomServices.updateroom(room,this.state.roomId).then(res => {
//           this.props.history.push('/viewroom');
//         })
//     }
//     changeRoomTypeHandler =(event)=>{
//         this.setState({roomType:event.target.value})
//     }
//     changeRoomCostHandler=(event)=>{
//         this.setState({roomCost:event.target.value})
//     }

//     changeIsOccupiedHandler=(event)=>{
//         this.setState({isOccupied:event.target.value})
//     }
    
//     render() {
//         return (
//             <div style={{backgroundImage:"url(https://images.wallpaperscraft.com/image/bed_balcony_table_chairs_view_hotel_room_39688_1920x1200.jpg)",height:700,backgroundSize:1400}}>
//                  <h2 id="home">update Form</h2>
//                  <form >

//                      <div className="form-group">
//                     <label style={{color:"black"}}>Room Type</label>
//                     <input type="text" className="form-control"  name="roomType"  value={this.state.roomType} onChange={this.changeRoomTypeHandler}/>
//                   </div>

//                   <div className="form-group">
//                     <label style={{color:"black"}}>Room Cost</label>
//                     <input type="number" className="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
//                   </div>

//                   <div className="form-group">
//                     <label style={{color:"black"}}>isOccupied</label>
//                     <input type="number" className="form-control"  name="isOccupied"  value={this.state.isOccupied} onChange={this.changeIsOccupiedHandler}/>
//                   </div>

//                   <button type="submit" className="btn btn-dark" onClick={this.updateroom.bind(this)}>update</button>
//                   </form>
//             </div>
//         )
//     }
// }
