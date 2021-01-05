import React, { Fragment, useState } from 'react';
import { races } from "../../Utils/Data";
import { RaceCard } from "../Cards/RaceCard";

export function RacesInfo() {
    const [opened, open] = useState(-1);
    
    function setOpen(i) {
        open(i === opened? -1 : i)
    }
    
    return (
        <Fragment>
            {
                races.map( (item,i) => {
                    return <RaceCard key={i} race_data={item} opened={i === opened} openCallback={() => setOpen(i)} />
                } )
            }
        </Fragment>
    );
}
