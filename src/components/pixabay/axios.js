import axios from "axios";

export default axios.create({
    baseURL:"https://pixabay.com/api/",
    headers:{
        "Content-Type":"application/json"
    }
})