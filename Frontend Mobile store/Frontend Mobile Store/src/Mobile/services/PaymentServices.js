import axios from 'axios'
const URL1 ="http://localhost:8080/addpayment"
const URL2 ="http://localhost:8080/getpayment"

class PaymentServices{
    
addpayment(payment){
    return axios.post(URL1,payment)
    }
getpayment(){
   return axios.get(URL2);
    }

}
export default new PaymentServices();