


import React, { Component } from 'react'
import  RoomServices from '../../services/RoomServices'

export default class AddRooms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             roomId:this.props.match.params.roomId,
             roomType:'',
             roomCost:'',
             isOccupied:''
        }
        this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
        this.changeRoomCostHandler = this.changeRoomCostHandler.bind(this); 
        this.changeIsOccupiedHandler = this.changeIsOccupiedHandler.bind(this);
        this.editRoom= this.editRoom.bind(this);
    } 
    componentDidMount(){
         if(this.state.roomId == -1){
            return
            }
        else{
            
            RoomServices.getRoomById(this.state.roomId).then((res)=>{
                let room = res.data;
                this.setState({roomType:room.roomType,
                roomCost:room.roomCost,
            isOccupied:room.isOccupied
        });
            });
        }
        
    }
    cancel=(e)=>{
        e.preventDefault()
        this.props.history.push('/viewroom')
    }
    editRoom=(e)=>{
        e.preventDefault()
        let rooms ={roomType:this.state.roomType,roomCost:this.state.roomCost,isOccupied:this.state.isOccupied}
        console.log('rooms =>' +JSON.stringify(rooms));

        if(this.state.roomId == -1){
            RoomServices.addroom(rooms).then(res=>{
              this.props.history.push('/viewroom')
            })
            
        }
        else {
            console.log(this.state.roomId)
            RoomServices.updateroom(rooms,this.state.roomId).then(res=>{
                if(this.state.isOccupied == 1){
                    this.props.history.push('/viewroom')
                    alert("updated successfully")
                    
                }
                else{
                    this.props.history.push('/viewroom')
                    alert("updated successfully")

                }
            })
        }
        
        
        
}


//for only adding 
    // saveroom=(e)=>{
    //     e.preventDefault()
             
    //          let rooms ={roomType:this.state.roomType, roomCost:this.state.roomCost, isOccuiped:this.state.isOccuiped  }
    //     console.log('rooms =>' +JSON.stringify(rooms));
    //     RoomServices.addroom(rooms).then(res=>{
    //         this.props.history.push('/viewroom')
    //     })
    //}
    changeRoomTypeHandler =(event)=>{
        this.setState({roomType:event.target.value})
    }
    changeRoomCostHandler=(event)=>{
        this.setState({roomCost:event.target.value})
    }

    changeIsOccupiedHandler=(event)=>{
        this.setState({isOccupied:event.target.value})
    }

    getTitle(){
        if(this.state.roomId == -1){
            return <h2 style={{color:"yellow"}} className="text-center">Add Room </h2>
        }
        else{
            return <h2 style={{color:"yellow"}} className="text-center">Update Room</h2>
        }
    }
    
    render() {
        return (
            <div style={{backgroundImage:"url(https://images.wallpaperscraft.com/image/bed_balcony_table_chairs_view_hotel_room_39688_1920x1200.jpg)",height:700,backgroundSize:1400}}>
                 {/* <h2 id="home">Add Form</h2> */}
                 
                 <div>
                        {
                            this.getTitle()
                        }
                    </div>
                 <form >
                   <div className="form-group">
                    <label style={{color:"black"}}>RoomType</label>
                    <input type="text" className="form-control"  name="roomType"  value={this.state.roomType} onChange={this.changeRoomTypeHandler}/>
                  </div>

                  <div className="form-group">
                    <label style={{color:"black"}}>RoomCost</label>
                    <input type="number" className="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
                  </div>

                  <div className="form-group">
                    <label style={{color:"black"}}>Status</label>
                    <input type="number" className="form-control"  name="isOccuiped"  value={this.state.isOccupied} onChange={this.changeIsOccupiedHandler}/>
                  </div>

                  {/* <button type="submit" className="btn btn-dark" onClick={this.saveroom.bind(this)}>Save</button> */}
                  
                  
                  <button type="submit" class="btn btn-primary" onClick={this.editRoom}>Save</button>
                <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"20px"}}> Cancel</button>
                  </form>
            </div>
        )
    }
}
