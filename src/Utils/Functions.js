
export function RollDie( sides = 6 ) {
    return Math.floor((Math.random() * sides) + 1)
}

export function validCharacter( text ) {
    let re = new RegExp('[a-zA-Z0-9.,!?¡¿ ñ\n\r]*');
    let p = text;
    let m = p.match(re);
    return (m[0].length === p.length);
}
