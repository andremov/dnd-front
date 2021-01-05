import React from 'react';
import { classes } from "../../Utils/Data";

export function Quests( { player_data } ) {
    return (
        <div className={'class_quest'}>
            {classes[player_data.char_class].quest}
        </div>
    );
}

