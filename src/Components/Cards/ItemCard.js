import React from 'react';

export function ItemCard( { data } ) {
    return <div className={'inventory-item'}>
        <div>
            <div>{data.name}</div>
            <div>x{data.quantity}</div>
        </div>
        <div>
            {data.data}
        </div>
    </div>
}

