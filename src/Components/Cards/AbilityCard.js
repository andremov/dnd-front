import React from 'react';
import { abilities } from "../../Utils/Data";
import { Gem } from "../Gem";

export function AbilityCard( { ability_data, openCallback, opened } ) {
    const { name, description } = ability_data
    
    return <div className={'ability_info ' + (opened ? '' : 'closed')} onClick={openCallback}>
        <h1>{name}</h1>
        
        <div className={'info-section'}>
            {description}
        </div>
        
        <Gem
            color={'purple'}
            text={'Ability'}
            type={2}
        />
    </div>
}
