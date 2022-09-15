import axios from 'axios'

const URL1 ="http://localhost:8080/getvaccantroom"
const URL2 = "http://localhost:8080/getroom"
const URL3 = "http://localhost:8080/addroom"
const URL4 = "http://localhost:8080/updateroom"
const URL5 = "http://localhost:8080/getroombyid"
const URL6 = "http://localhost:8080/deleteroom"

class RoomServices {

    getvaccantroom(){
        return axios.get(URL1);
    }

    getallroom(){
        return axios.get(URL2);
    }
    addroom(rooms){
        return axios.post(URL3,rooms);
    }
    updateroom(room,roomId){
        return axios.put(URL4+'/'+ roomId, room);
    }
    getRoomById(roomId){
        return axios.get(URL5+'/'+roomId);

    }
    deleteRoom(roomId){
        return axios.delete(URL6+'/'+roomId);
    }
}
export default new RoomServices();