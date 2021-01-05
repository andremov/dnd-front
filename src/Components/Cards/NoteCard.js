import React, { useState } from 'react';
import { validCharacter } from "../../Utils/Functions";

export function NoteCard( { data } ) {
    const [opened, setOpen] = useState(false);
    const [ notes, setNotes ] = useState(data.data)
    const [ hasChanges, setHasChanges ] = useState(false)
    
    function openCallback() {
        setOpen(!opened)
    }
    
    function handleChange( value ) {
        if ( validCharacter(value) ) {
            setNotes(value)
            setHasChanges(true)
        }
    }
    
    function sendNotes() {
    
    }
    
    return (
        <div className={'note-card ' + (opened ? '' : 'closed')} onClick={openCallback}>
            <h1>{data.name}</h1>
            
            <textarea
                onChange={( e ) => handleChange(e.target.value)}
                value={notes}
                placeholder={'Notes'}
            />
            
            <button
                disabled={!hasChanges}
                children={'Save'}
                onClick={sendNotes}
                className={'primary'}
            />
        </div>
    );
}

