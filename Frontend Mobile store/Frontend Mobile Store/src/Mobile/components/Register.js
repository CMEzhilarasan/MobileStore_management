import React,{Component} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import RegisterServices from '../services/RegisterServices'


export default class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      errors:{
      userId:'',
      userName:'',
      emailId:'',
      password:'',
      phoneNumber:'',
      address:'',
      gender:'',
     // role:''
    }
  }
    
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changegenderHandler = this.changegenderHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.changeHandler =this.changeHandler.bind(this);
  
  }

  
  changeHandler =(event)=>{
    let name =event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

switch(name){
  
    case "userName":errors.userName =value.length < 3 ? "Name is too short,please enter your Fullname" : "";  
    break;
    case "emailId":errors.emailId =value.length <5 ? " Invalid email":"";
    let apos = value.indexOf('@');
    let dotpos = value.lastIndexOf('.');

    if(apos < 1 || dotpos - apos <2){
      errors.emailId ="Please enter valid emailId";
    }
    break;
    case "password":errors.password =value.length < 8 ? "password should have minimum 8 characters" : "";  
    break;

    case "phoneNumber":errors.phoneNumber=value.length !=10 ? "Invalid ,Phonenumber should have 10 digits" : "";  
    break;
    
    default: break;
}
console.log(this.state)
this.setState({errors,[name]:value});
}

  saveUser=(e)=>{
  e.preventDefault()
    let register = {
      
      userName:this.state.userName,
      emailId:this.state.emailId,
      password:this.state.password,
       phoneNumber:this.state.phoneNumber,
       address:this.state.address,
       gender:this.state.gender,
      
      }
    
    console.log('register =>' +JSON.stringify(register));
    RegisterServices.createUser(register).then(res =>{
      
        
      
        alert("You registered successfully")
       })
  }


    changeAddressHandler =(event)=>{
    this.setState({address:event.target.value})
  }
  changegenderHandler = (event)=>{
    this.setState({gender:event.target.value})
  }
  

  render(){

  const {errors}=this.state;
    return (
        <div>
<nav class="navbar navbar-light" style={{backgroundColor:"blue"}}>
                <span class="navbar-brand mb-0 h1"><h4>Mobile Store Management</h4></span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="/" style={{color:"white"}}><h6>Home</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"white"}}><h6>Services</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/register" style={{color:"white"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item4 active">
                        <Link class="nav-link" to="/login" style={{color:"white"}}><h6>Login</h6></Link>
                    </li>
                </ul>
            </nav>

            <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1551842864-a185da0fbbbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)",height:890,backgroundSize:1550}}>
          
            <h2 style={{textAlign:"center",color:"red"}}>Register Here</h2>
            
            <form>
            <div className="form-group">
              <label><h6>Name</h6></label>
              <input type="text" className="form-control"  name="userName" placeholder="enter  your name"   value={this.state.userName} onChange={this.changeHandler} />
            <p style={{color:"red"}}>{errors.userName}</p></div>

            <div className="form-group">
              <label><h6>EmailId</h6></label>
              <input type="email" className="form-control" name="emailId" placeholder="example@gmail.com"   value={this.state.emailId} onChange={this.changeHandler}/>
           <p style={{color:"red"}}>{errors.emailId}</p> </div>

            <div className="form-group">
              <label><h6>Password</h6></label>
              <input type="password" id ="password" className="form-control"  name="password" placeholder="enter password"  value={this.state.password} onChange={this.changeHandler}/>
              <p style={{color:"red"}}>{errors.password}</p> </div>

            <div className="form-group">
              <label><h6>Phone Number</h6></label>
              <input type="Number" className="form-control"  name="phoneNumber" placeholder="enter phone Number" value={this.state.phoneNumber} onChange={this.changeHandler}/>
              <p style={{color:"red"}}>{errors.phoneNumber}</p></div>

            <div className="form-group">
                    <label><h6>Addres</h6></label>
                    <input type="text" className="form-control"  name="address" placeholder="enter Address" value={this.state.address} onChange={this.changeAddressHandler}/>
                  </div>

            <div className="form-group">
                    <label><h6>Gender</h6></label>
                  <select className="form-control" value={this.state.gender} onChange={this.changegenderHandler}>
                  <option>Choose here</option>
                  <option>Female</option>
                  <option>Male</option>
                  </select>
                  </div>
            

    
              <button type="submit" className="btn btn-success" onClick={this.saveUser}>Register</button>
          </form>
        </div>

        
        </div>
        
    )
}

}