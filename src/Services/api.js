import axios from "axios";

export const API = axios.create({
    baseURL : 'https://andremov-dnd-api.glitch.me/',
    timeout : 5000,
    responseType : 'json',
});
