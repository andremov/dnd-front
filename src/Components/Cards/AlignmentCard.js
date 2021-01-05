import React  from 'react';
import { alignments } from "../../Utils/Data";
import { Gem } from "../Gem";

export function AlignmentCard( { alignment_data, openCallback, opened } ) {
    const { name, description } = alignment_data
    
    return <div className={'alignment-card ' + (opened ? '' : 'closed')} onClick={openCallback}>
        <h1>{name}</h1>
        
        <div className={'info-section'}>
            {description}
        </div>
        
        <Gem
            color={'orange'}
            text={'Alignment'}
            type={2}
        />
    </div>
}
