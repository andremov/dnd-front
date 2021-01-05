import React, { Fragment, useState } from 'react';
import { alignments } from "../../Utils/Data";
import { AlignmentCard } from "../Cards/AlignmentCard";

export function AlignmentsInfo() {
    const [opened, open] = useState(-1);
    
    function setOpen(i) {
        open(i === opened? -1 : i)
    }
    
    return (
        <Fragment>
            {
                alignments.map( (item,i) => {
                    return <AlignmentCard key={i} alignment_data={item} opened={i === opened} openCallback={() => setOpen(i)} />
                } )
            }
        </Fragment>
    );
}

