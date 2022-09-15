import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import StaffServices from '../../services/StaffServices'

export default class ViewStaffs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             staffs : []
        }
        this.addstaff =this.addstaff.bind(this);
        this.editstaff =this.editstaff.bind(this);
        this.deletestaff=this.deletestaff.bind(this);
    }
   
    deletestaff(staffId){
        StaffServices.deletestaff(staffId).then(res=>{
            this.setState({staffs:this.state.staffs.filter(staff =>staff.staffId !== staffId )})
        })
  }
    
  editstaff(staffId){
        this.props.history.push(`/addstaff/${staffId}`);
            }
    addstaff(){
                this.props.history.push('/addstaff/-1');
            }

    componentDidMount(){
        StaffServices.getStaff().then((res)=>{
            this.setState({staffs:res.data}
            )
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
            </nav>   <br/>

            <button onClick={this.addstaff} className="btn btn-primary">Add Staff</button>
            
            {/* <div className="card-body"> */}
            <table className="table table-striped table-bordered">
       
        <thead>
        <tr>
      <th >StaffId</th>
      <th >StaffName</th> 
      <th >StaffSalary</th>
      <th>PhoneNumber</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.staffs.map((staff) =>
              <tr key={staff.staffId}>
                   <td>{staff.staffId}</td> 
                  <td>{staff.staffName}</td>
                  <td>{staff.staffSalary}</td>
                  <td>{staff.phoneNumber}</td>
                  <td>
                  <button onClick ={ () => this.editstaff(staff.staffId)} className = "btn btn-success">Update</button>
                  <button onClick={()=> this.deletestaff(staff.staffId)} className="btn btn-danger" style={{marginLeft:"20px"}} >Delete</button>
                  </td>
              </tr>
              
          )
      }
      </tbody>
        </table>
        </div>  
        // </div>
            
        )
    }
}

