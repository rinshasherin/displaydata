import axios from "axios";

export const getUser=async()=>{
    return await axios.get('https://jsonplaceholder.typicode.com/users')
}