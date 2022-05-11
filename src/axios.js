import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-clone-42590.cloudfunctions.net/api'
  // "http://127.0.0.1:5001/clone-clone-42590/us-central1/api",
});

export default instance;


