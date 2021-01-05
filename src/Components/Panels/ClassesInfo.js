import React, { Fragment, useState } from 'react';
import { classes } from "../../Utils/Data";
import { ClassCard } from "../Cards/ClassCard";

export function ClassesInfo() {
    const [opened, open] = useState(-1);
    
    function setOpen(i) {
        open(i === opened? -1 : i)
    }
    
    return (
        <Fragment>
            {
                classes.map( (item,i) => {
                    return <ClassCard key={i} class_data={item} opened={i === opened} openCallback={() => setOpen(i)} />
                } )
            }
        </Fragment>
    );
}


