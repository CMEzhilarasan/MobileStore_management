import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import RegisterServices from '../services/RegisterServices';



export default class Login extends Component {
    constructor(props){
    super(props);
    
    this.state = {
        //role : '',
        user:[],
        userId:'',
        emailId:'',
         password:'',
         a:''
        }
   
  // this.changeRole = this.changeRole.bind(this);
    this.changeEmail= this.changeEmail.bind(this);
   this.changePassword= this.changePassword.bind(this);
//    this.changeHandler =this.changeHandler.bind(this);
 }


// changeRole =(event)=>{
//    this.setState({role:event.target.value})
// }

changeEmail =(event)=>{
     this.setState({ emailId:event.target.value})
}
changePassword= (event)=>{
     this.setState({ password:event.target.value})
    
}
//first code
// checkRole=(e)=>{
//    e.preventDefault()
//    let role = {role:this.state.role}
//    console.log('role =>' +JSON.stringify(role));
//    if(this.state.role === "admin" && this.state.emailId === "admin1@hbms.com" && this.state.password === "admin123")
//     {
//        this.props.history.push("/adminhome")
//     }
//   else  if(this.state.role === "admin" && this.state.emailId === "admin2@hbms.com" && this.state.password === "admin456")
//     {
//        this.props.history.push("/adminhome")
//     }
//     else if(this.state.role === "user" && this.state.emailId === "madhu@gmail.com" && this.state.password === "madhu123" )
//     {
//         this.props.history.push("/book")
//     }
   
//     else if(this.state.role === "user" && this.state.emailId === "sowju@gmail.com" && this.state.password === "sowju123" )
//     {
//         this.props.history.push("/book")
//     }
//     else if(this.state.role === "user" && this.state.emailId === "thanu@gmail.com" && this.state.password === "thanu123" )
//     {
//         this.props.history.push("/book")
//     }
//     else if(this.state.role === "user" && this.state.emailId === "dhanu@gmail.com" && this.state.password === "dhanu123" )
//     {
//         this.props.history.push("/book")
//     }

//     else{
//         alert("invalid user")
//     }
// }



//second

componentDidMount(){
    let register = {userId:this.state.userId,userName:this.state.userName ,emailId:this.state.emailId,password:this.state.password}
    console.log(this.state.userId)
    console.log('register =>' +JSON.stringify(register));
    RegisterServices.getUser().then((res) => {
        this.setState({ user: res.data});
          this.state.a = (res.data);
          console.log(this.state.a);
           
    });
  }
checkRole=(e)=>{
    e.preventDefault()

    for(let i=0;i<this.state.a.length;i++){
    //console.log(this.state.a[i].emailId);
        if((this.state.emailId===this.state.a[i].emailId)&&(this.state.password===this.state.a[i].password))
        {
            // this.message="login";
            // console.log(this.message)
            // alert("Login succesfully");
            this.props.history.push("/book")
        }
      else if( this.state.emailId === "admin@hbms.com" && this.state.password === "admin123")
         {
            //alert("Login succesfully");
             this.props.history.push("/adminhome")
          }
          else{
            //   alert("Inavlid user");
              this.message='inavlid user';
              console.log(this.message);
          }

    }
}

render(){
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
       
            <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)", height:890,backgroundSize:1550}}><br/>
            <h2 style={{textAlign:"center",color:"red"}}>Login Here</h2>
            
            
            <form>
            <div className="form-group">
              <label style={{color:"black"}}><h6>Email address</h6></label>

              <input type="email"  id="emailId" className="form-control" name = "emailId" placeholder="example@gmail.com" value={this.state.emailId} onChange={this.changeEmail}/>
            </div><br/>
            <div className="form-group">
              <label style={{color:"black"}}><h6>Password</h6></label>
              <input type="password" className="form-control" placeholder="enter password" name="pasword1" value={this.state.password} onChange={this.changePassword} />
              
            {/* <p>{errors.password}</p> */}
            </div><br/>

            {/* <div className="form-group">
              <label style={{color:"black"}}>Role</label>
              <input type="text" className="form-control" name="role" placeholder="enter role" value={this.state.role} onChange={this.changeRole}/>
            </div> */}

            {/* <div className="form-group">
                <label><h6>Role</h6></label>
                <select name="role" className="form-control" value={this.state.role} onChange={this.changeRole}>
                <option>choose...</option>
                <option>user</option>
                <option>admin</option>
                </select>
            </div> */}
            
            <button type="submit" className="btn btn-success" onClick={this.checkRole}>Login</button><br/>
            <Link to="/register">If  you are new user please register</Link>
             </form>
        </div>
        </div>
    )
}

}