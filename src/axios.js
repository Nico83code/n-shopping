import axios from "axios"

const instance = axios.create({
    // the api (cloud function) URL
    baseURL: "http://localhost:5001/n-shopping/us-central1/api"
});

export default instance;