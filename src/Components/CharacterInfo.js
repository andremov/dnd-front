import React from 'react';
import { alignments, classes, races } from "../Utils/Data";
import { Gem } from "./Gem";

export function CharacterInfo( { player_data } ) {
    
    return (
        <div className={'char-info'}>
            
            <div className={'section basic'}>
                <h1>{player_data.name + ' ' + player_data.family}</h1>
                
                <div className={'data'}>
                    {player_data.age} yrs
                </div>
                
                <div className={'data'}>
                    {player_data.height} cm
                </div>
                
                <div className={'two-gems'}>
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
                
                <div className={'one-gem'}>
                    <Gem
                        color={'orange'}
                        text={alignments[player_data.alignment].name}
                        type={2}
                        side={'right'}
                        blend={false}
                    />
                </div>
            </div>
            <div className={'section basic'}>
                <h2>Basic Info</h2>
                <div className={'two-gems'}>
                    <Gem
                        color={'red'}
                        text={player_data.hit_points + '/' + player_data.max_hit_points}
                        type={5}
                        side={'right'}
                        blend={false}
                        shadow={true}
                        full={true}
                    />
                    <Gem
                        color={'red'}
                        text={'1d' + classes[player_data.char_class].hit_dice}
                        type={8}
                        side={'right'}
                        blend={false}
                        shadow={true}
                        full={true}
                    />
                </div>
                <div className={'two-gems'}>
                    <Gem
                        color={'red'}
                        text={player_data.attack_dice_number + 'd' + player_data.attack_dice_sides}
                        type={7}
                        side={'right'}
                        blend={false}
                        shadow={true}
                        full={true}
                    />
                    <Gem
                        color={'red'}
                        text={player_data.armor_class}
                        type={6}
                        side={'right'}
                        blend={false}
                        shadow={true}
                        full={true}
                    />
                </div>
            </div>
        </div>
    );
}

