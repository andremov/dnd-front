import React, { Fragment } from 'react';
import { alignments } from "../Utils/Data";
import { Gem } from "./Gem";

export function AlignmentInfo( { app_data } ) {
    const { name, description } = alignments[app_data.item_id]
    return <Fragment>
        <h1>{name}</h1>
        
        <div className={'info-section'}>
            {description}
        </div>
        
        <Gem
            color={'orange'}
            text={'Alignment'}
            type={2}
        />
    </Fragment>
}
