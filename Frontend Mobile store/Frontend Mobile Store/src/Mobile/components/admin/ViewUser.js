import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RegisterServices from '../../services/RegisterServices'

export default class ViewUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             registers : []
        }
    }
    componentDidMount(){
        RegisterServices.getUser().then((res)=>{
            this.setState({registers:res.data})
        });
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

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>UserName</th> 
                        <th>EmailId</th>
                        {/* <th>Password</th> */}
                        <th>PhoneNumber</th>
                        <th>Address</th>
                        <th>Gender</th>
                        {/* <th>Role</th>  */}
                    </tr>
                </thead>
            <tbody>
                {
                    this.state.registers.map((register) =>
                        <tr key={register.id}>
                            <td>{register.userId}</td> 
                            <td>{register.userName}</td>
                            <td>{register.emailId}</td>
                            {/* <td>{register.password}</td> */}
                            <td>{register.phoneNumber}</td>
                            <td>{register.address}</td>
                            <td>{register.gender}</td>
                            {/* <td>{register.role}</td> */}
                        </tr>
                     )
                 }
            </tbody>
        </table>

            </div>
        )
    }
}
