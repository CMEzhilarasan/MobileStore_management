import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PaymentServices from '../../services/PaymentServices'

export default class ViewPayments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             payment:[]
        }
    }
    componentDidMount(){
        PaymentServices.getpayment().then((res)=>{
            this.setState({payment:res.data});
        })
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
            </nav>  
              
            <table class="table table-striped">
  <thead>
    <tr>
     
      <th >PaymentId</th>
      <th >RoomNumber</th> 
      <th>Name</th>
      <th>PhoneNumber</th>
      <th >RoomCost</th>
      {/* <th >cvv</th> */}
      
    </tr>
  </thead>
  <tbody>
      {
          this.state.payment.map((pay) =>
              <tr key={pay.paymentId}>
                   <td>{pay.paymentId}</td> 
                  <td>{pay.roomId}</td>
                  <td>{pay.userName}</td>
                  <td>{pay.phoneNumber}</td>
                   <td>{pay.roomCost}</td>
                  {/* <td>{pay.cvv}</td> */}
                 
              </tr>
              
          )
      }
      
  </tbody>
</table>

            </div>
        )
    }
}
