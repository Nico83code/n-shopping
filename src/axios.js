import axios from "axios"

const instance = axios.create({
    // the api (cloud function) URL
    baseURL: "https://us-central1-n-shopping.cloudfunctions.net/api"
    // localhost: "http://localhost:5001/n-shopping/us-central1/api"
});

export default instance;