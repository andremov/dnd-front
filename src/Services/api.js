import axios from "axios";

export const API = axios.create({
    // baseURL : 'https://andremov-dnd-api.glitch.me/',
    baseURL : 'http://localhost:3030/',
    timeout : 5000,
    responseType : 'json',
});

export function sendCharacter( object ) {
    return API.post('/players/', object).then(r => {
        return r.data;
    })
}

export function findCharacter( codename ) {
    return API.get('/players/find', { params : { codename } }).then(r => {
        return r.data;
    })
}
