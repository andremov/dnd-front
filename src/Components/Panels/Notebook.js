import React, { useState } from 'react';
import { validCharacter } from "../../Utils/Functions";

export function Notebook( { player_data } ) {
    const [ notes, setNotes ] = useState(player_data?.notes)
    const [hasChanges, setHasChanges] = useState(false)
    
    function handleChange(value) {
        if (validCharacter(value)) {
            setNotes(value)
            setHasChanges(true)
        }
    }
    
    function sendNotes() {
    
    }
    
    return (
        <div className={'notes'}>
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

