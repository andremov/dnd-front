import React, { useState } from "react";
import { findCharacter } from "../Services/api";

export function EnterForm( { eventCallback } ) {
    const [ codename, setCodename ] = useState('');
    
    function requestPlayer() {
        findCharacter(codename).then(r => {
            console.log(r)
        })
    }
    
    return <div className={'enter'}>
        <form className={'enter-form'} onSubmit={e => {
            e.preventDefault()
        }}>
            <input
                placeholder={'Codename'}
                value={codename}
                onChange={e => setCodename(e.target.value)}
            />
            <button
                className={'primary'}
                children={'Enter'}
                onClick={requestPlayer}
            />
            <button
                className={'secondary small'}
                children={'Create'}
                onClick={() => {
                    eventCallback({ action : 'modify', data : { name : 'loading', destination : 'new_player' } })
                    setTimeout(() => eventCallback({ action : 'go_to_destination' }), 1000)
                }}
            />
        </form>
    </div>
}
