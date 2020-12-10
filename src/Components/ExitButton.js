import React, { Fragment } from "react";

export function ExitButton( { canExit, exitCallback } ) {
    if ( !canExit ) {
        return <Fragment />
    }
    
    return <div className={'exit-btn'} onClick={exitCallback}>
        <div>X</div>
    </div>
}
