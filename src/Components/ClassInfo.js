import React, { Fragment } from "react";
import { classes } from "../Utils/Data";
import { Gem } from "./Gem";

export function ClassInfo( { app_data } ) {
    const { name, hit_dice, armor, weapons } = classes[app_data.item_id]
    return <Fragment>
        <h1>{name}</h1>
        
        <div className={'info-section'}>
            <div>
                <span style={{ fontWeight : 'bold' }}>
                    Hit Points:{' '}
                </span>
                {hit_dice}
            </div>
            
            <div>
                <span style={{ fontWeight : 'bold' }}>
                    Hit Die:{' '}
                </span>
                {hit_dice}
            </div>
        </div>
        
        
        <div className={'equip-section'}>
            <span style={{ fontWeight : 'bold' }}>
                Armor:{' '}
            </span>
            <span className={armor.light ? 'valid' : 'invalid'}> Light, </span>
            <span className={armor.medium ? 'valid' : 'invalid'}> Medium, </span>
            <span className={armor.heavy ? 'valid' : 'invalid'}> Heavy, </span>
            <span className={armor.shield ? 'valid' : 'invalid'}> Shield. </span>
        </div>
    
    
        <div className={'equip-section'}>
            <span style={{ fontWeight : 'bold' }}>
                Weapons:{' '}
            </span>
            <span className={weapons.simple.melee ? 'valid' : 'invalid'}> Simple Melee, </span>
            <span className={weapons.simple.ranged ? 'valid' : 'invalid'}> Simple Ranged, </span>
            <span className={weapons.martial.melee ? 'valid' : 'invalid'}> Martial Melee, </span>
            <span className={weapons.martial.ranged ? 'valid' : 'invalid'}> Martial Ranged. </span>
        </div>
    
        <Gem
            color={'aqua'}
            text={'Class'}
            type={2}
        />
    </Fragment>
}
