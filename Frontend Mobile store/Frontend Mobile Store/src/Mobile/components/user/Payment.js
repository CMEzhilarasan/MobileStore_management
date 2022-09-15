import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import PaymentServices from '../../services/PaymentServices';

export default class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roomId:this.props.match.params.roomId,
            userName:'',
            errors:{
            phoneNumber:'',
            roomCost:'',
             cardNumber:'',
            cvv:''
        }
        }
        this.changeIdHandler = this.changeIdHandler.bind(this)
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this)
        this.changeRoomCostHandler = this.changeRoomCostHandler.bind(this)
        // this.changeCvvHandler = this.changeCvvHandler.bind(this)
        // this.changecardNumberHandler = this.changecardNumberHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.payment = this.payment.bind(this)

    }
    payment=(e)=>{
        e.preventDefault()
        let payment = {roomId:this.state.roomId,
            userName:this.state.userName,
            phoneNumber:this.state.phoneNumber,
            roomCost:this.state.roomCost,
            cardNumber:this.state.cardNumber,
            cvv:this.state.cvv
            
        }
        console.log('payment =>' +JSON.stringify(payment));
        PaymentServices.addpayment(payment).then(res =>{
          alert("Your payment is Succesfull")
          this.props.history.push('/status');
        })
      }
    changeIdHandler = (event)=>{
        this.setState({roomId:event.target.value})
      }
      changeUserNameHandler=(event)=>{
        this.setState({userName:event.target.value})
      }
      changeRoomCostHandler=(event)=>{
        this.setState({roomCost:event.target.value})
      }
      // changecardNumberHandler =(event) =>{
      //   this.setState({cardNumber:event.target.value})
      // }
      // changeCvvHandler=(event)=>{
      //   this.setState({cvv:event.target.value})
     // }


     changeHandler =(event)=>{
      let name =event.target.name;
      let value = event.target.value;
      let errors = this.state.errors;
  
  switch(name){
    case"phoneNumber":errors.phoneNumber =value.length!=10 ?"Number must contain 10 digits":"";
    break;
    
      case "cardNumber":errors.cardNumber =value.length !=16 ? "Invalid card Number" : "";  
      break;
     
      case "cvv":errors.cvv =value.length !=3 ? "Invalid cvv" : "";  
      break;
   
      default: break;
  }
  console.log(this.state)
  this.setState({errors,[name]:value});
  }

  


    render() {
      const {errors}=this.state;
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
                     <form>
                     <div class="form-group">
                    <label style={{color:"black"}}>RoomId</label>
                    <input type="number" class="form-control"  name="roomId"  value={this.state.roomId} onChange={this.changeIdHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>User Name</label>
                    <input type="text" class="form-control"  name="userName"  value={this.state.userName} onChange={this.changeUserNameHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Phone Number</label>
                    <input type="text" class="form-control"  name="phoneNumber"  value={this.state.phoneNumber} onChange={this.changeHandler}/>
                    <p style={{color:"red"}}>{errors.phoneNumber}</p>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Room Cost</label>
                    <input type="number" class="form-control"  name="roomCost"  value={this.state.roomCost} onChange={this.changeRoomCostHandler}/>
                  </div>
                  <div class="form-group">
                    <label style={{color:"black"}}>Card Number</label>
                    <input type="number" class="form-control"  name="cardNumber"  value={this.state.cardNumber} onChange={this.changeHandler}/>
                    <p style={{color:"red"}}>{errors.cardNumber}</p>
                    </div>

                  <div class="form-group">
                    <label style={{color:"black"}}>CVV</label>
                    <input type="password" class="form-control"  name="cvv"  value={this.state.cvv} onChange={this.changeHandler}/>
                    <p style={{color:"red"}}>{errors.cvv}</p>
                    </div>
                  <button type="submit" class="btn btn-dark" onClick={this.payment}>Make Payment</button>
                     </form>
                
            </div>
        )
    }
}
