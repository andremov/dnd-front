import React from 'react';
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
                return <div className={'header-item'} key={i}>
                    <div className={'item-name'}>
                        {item.name}
                    </div>
                    <div className={'sub-item-list'}>
                        {
                            item.list.map(( item2, i2 ) => {
                                return <div
                                    className={'sub-item'}
                                    key={i2}
                                    onClick={
                                        () => callback({
                                            event_name : item.window_type,
                                            event_window : 50,
                                            event_data : { item_id : item2.id }
                                        })
                                    }
                                >
                                    {item2.name}
                                </div>
                            })
                        }
                    </div>
                </div>
            })}
        </header>
    );
}

