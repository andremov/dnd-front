import React, { Fragment } from "react";
import { abilities, races, skills } from "../Utils/Data";

export function RaceInfo( { app_data } ) {
    const { name, ability_bonus, skill_bonus, age, height, trait_name } = races[app_data.race]
    return <Fragment>
        <h1>{name}</h1>
        <h2>{trait_name}</h2>
        
        <div style={{ fontWeight : 'bold' }}>
            Abilities
        </div>
        {ability_bonus.map(( item, i ) => {
            return <div key={i}>
                {abilities[item.id].name}: +{item.bonus}
            </div>
        })}
        
        <div style={{ fontWeight : 'bold' }}>
            Skills
        </div>
        {skill_bonus.map(( item, i ) => {
            return <div key={i}>
                {skills[item.id]}: +{item.bonus}
            </div>
        })}
        
        <br />
        
        <div>
            Age: {age.min}-{age.max}
        </div>
        
        <br />
        
        <div>
            Height: {height.min}-{height.max}
        </div>
    </Fragment>
}
