import React, { useState } from 'react';
import { validCharacter } from "../../Utils/Functions";
import { modifyNote } from "../../Services/api";
import { Loading } from "../Loading";

export function NoteCard( { data } ) {
    const [ opened, setOpen ] = useState(false);
    const [ progress, setProgress ] = useState(false);
    const [ notes, setNotes ] = useState(data.data)
    const [ hasChanges, setHasChanges ] = useState(false)
    
    console.log( )
    
    function openCallback() {
        setOpen(!opened)
    }
    
    function handleChange( value ) {
        if ( validCharacter(value) ) {
            setNotes(value)
            setHasChanges(true)
        }
    }
    
    function sendNotes( e ) {
        e.stopPropagation()
        setProgress(true)
        modifyNote(data._id, { data : notes }).then(r => {
            setProgress(false)
            setHasChanges(false)
        })
    }
    
    return (
        <div className={'note-card ' + (opened ? '' : 'closed')} onClick={openCallback}>
            <h1>{data.name}</h1>
            
            <textarea
                style={{
                    height: ((notes.split(/\r\n|\r|\n/).length+2)*13.83*1.4)+'px'
                }}
                onChange={( e ) => handleChange(e.target.value)}
                onClick={e => e.stopPropagation()}
                value={notes}
                disabled={progress}
                placeholder={'Notes'}
            />
            
            <button
                disabled={!hasChanges || progress}
                children={progress? <Loading /> : 'Save'}
                onClick={sendNotes}
                className={'primary'}
            />
        </div>
    );
}

