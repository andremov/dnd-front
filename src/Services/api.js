import axios from "axios";
import { classes } from "../Utils/Data";

export const API = axios.create({
    // baseURL : 'https://andremov-dnd-api.glitch.me/',
    baseURL : 'http://localhost:3030/',
    timeout : 5000,
    responseType : 'json',
});

export function sendCharacter( object ) {
    return API.post('/players/', {
        ...object,
        stats : JSON.stringify(object.stats),
        level: 1,
        hit_points : classes[object.char_class].hit_dice,
        max_hit_points : classes[object.char_class].hit_dice
    }).then(r => {
        return r.data;
    })
}

export function findCharacter( codename ) {
    return API.get('/players/find', { params : { codename } }).then(r => {
        r.data.stats = JSON.parse(r.data.stats)
        return r.data;
    })
}
