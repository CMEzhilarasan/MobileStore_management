import axios from'axios';
const URL1 ="http://localhost:8080/adduser";
const URL2 ="http://localhost:8080/getuser";

 class RegisterServices{
    
    getUser(){
        return axios.get(URL2);
    }
        createUser(register){
        return axios.post(URL1,register);
    }


   
}
export default new RegisterServices();
