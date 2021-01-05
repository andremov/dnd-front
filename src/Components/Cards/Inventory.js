import React, { Fragment } from 'react';

export function Inventory( { player_inventory } ) {
    return (
        <Fragment>
            {player_inventory.length === 0 ?
                <Item
                    data={{name : 'Nothing', quantity: 0, data: ''}}
                />
                : player_inventory.map(( item, i ) => {
                    return <Item key={i} data={item} />
                })}
        </Fragment>
    );
}

function Item( { data } ) {
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
