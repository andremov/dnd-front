import React from 'react';

export function SpellCard( { data } ) {
    return <div className={'spell-item'}>
        <div>
            <div>{data.name}</div>
            <div>x{data.quantity}</div>
        </div>
        <div>
            {data.data}
        </div>
    </div>
}
