import React, { Fragment } from "react";
import { abilities, races, skills } from "../Utils/Data";
import { Gem } from "./Gem";

export function RaceInfo( { app_data } ) {
    const { name, ability_bonus, skill_bonus, age, height, trait_name } = races[app_data.item_id]
    return <Fragment>
        <h1>{name}</h1>
        
        <div className={'trait-section'}>
            <h2>{trait_name}</h2>
            
            {
                ability_bonus.length > 0 ?
                    <Fragment>
                        <div style={{ fontWeight : 'bold' }}>
                            Abilities
                        </div>
                        {ability_bonus.map(( item, i ) => {
                            return <div key={i}>
                                {abilities[item.id].name}: +{item.bonus}
                            </div>
                        })}
                    </Fragment> : <Fragment />
            }
            
            {
                skill_bonus.length > 0 ?
                    <Fragment>
                        <div style={{ fontWeight : 'bold' }}>
                            Skills
                        </div>
                        {skill_bonus.map(( item, i ) => {
                            return <div key={i}>
                                {skills[item.id]}: +{item.bonus}
                            </div>
                        })}
                    </Fragment> : <Fragment />
            }
        </div>
        
        <div className={'info-section'}>
            <div>
                Age: {age.min}-{age.max}
            </div>
            
            <div>
                Height: {height.min}-{height.max}
            </div>
        </div>
        
        <Gem
            color={'cyan'}
            text={'Race'}
            type={2}
        />
    </Fragment>
}
