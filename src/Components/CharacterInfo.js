import React from 'react';
import { alignments, classes, races } from "../Utils/Data";
import { Gem } from "./Gem";

export function CharacterInfo( { player_data } ) {
    console.log(player_data)
    return (
        <div className={'char-info'}>
            
            <div className={'section basic'}>
                <h2>Basic Info</h2>
                <div className={'name'}>
                    {player_data.name + ' ' + player_data.family}
                </div>
                <div className={'data'}>
                    {player_data.age} yrs
                </div>
                <div className={'data'}>
                    {player_data.height} cm
                </div>
                <Gem
                    color={'orange'}
                    text={alignments[player_data.alignment].name}
                    type={2}
                    side={'right'}
                    blend={false}
                />
                <Gem
                    color={'cyan'}
                    text={races[player_data.race].name}
                    type={2}
                    side={'right'}
                    blend={false}
                />
                <Gem
                    color={'aqua'}
                    text={classes[player_data.char_class].name}
                    type={2}
                    side={'right'}
                    blend={false}
                />
            </div>
            <div className={'section basic'}>
                <h2>Basic Info</h2>
                <Gem
                    color={'red'}
                    text={classes[player_data.char_class].hit_dice}
                    type={8}
                    side={'right'}
                    blend={false}
                    shadow={true}
                />
                <Gem
                    color={'red'}
                    text={player_data.armor_class}
                    type={6}
                    side={'right'}
                    blend={false}
                    shadow={true}
                />
                <Gem
                    color={'red'}
                    text={player_data.attack_dice_number+'d'+player_data.attack_dice_sides}
                    type={7}
                    side={'right'}
                    blend={false}
                    shadow={true}
                />
            </div>
        </div>
    );
}

