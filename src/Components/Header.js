import React, { Fragment, useState } from 'react';
import { alignments, classes, races } from "../Utils/Data";

const items = [
    {
        name : 'Races',
        list : races,
        window_type : 'race-info'
    },
    {
        name : 'Classes',
        list : classes,
        window_type : 'class-info'
    },
    {
        name : 'Alignments',
        list : alignments,
        window_type : 'alignment-info'
    }

]

export function Header( { callback } ) {
    
    return (
        <header>
            {items.map(( item, i ) => {
                return <HeaderItem data={item} key={i} callback={callback} />
            })}
        </header>
    );
}

function HeaderItem( { data, callback } ) {
    const [ opened, setOpened ] = useState(false)
    
    return <div className={'header-item'}>
        
        <div className={'item-name' + (opened ? ' open' : '')} onClick={() => setOpened(!opened)}>
            {data.name}
        </div>
        
        <ul className={'dropdown-list' + (opened ? ' open' : '')}> {
            data.list.map(( item, i ) => {
                return <li
                    className={'dropdown-item'}
                    key={i}
                    onClick={
                        () => callback({
                            event_name : data.window_type,
                            event_data : { item_id : item.id }
                        })
                    }
                >
                    {item.name}
                </li>
            })
        }
        </ul>
    </div>
}

