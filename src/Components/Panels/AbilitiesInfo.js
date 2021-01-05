import React, { Fragment, useState } from 'react';
import { abilities } from "../../Utils/Data";
import { AbilityCard } from "../Cards/AbilityCard";

export function AbilitiesInfo() {
    const [opened, open] = useState(-1);
    
    function setOpen(i) {
        open(i === opened? -1 : i)
    }
    
    return (
        <Fragment>
            {
                abilities.map( (item,i) => {
                    return <AbilityCard key={i} ability_data={item} opened={i === opened} openCallback={() => setOpen(i)} />
                } )
            }
        </Fragment>
    );
}
