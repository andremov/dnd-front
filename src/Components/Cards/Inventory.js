import React from 'react';

export function Inventory({player_data}) {
    return (
        <div className={'inventory'}>
            <h1>Inventory</h1>
            {player_data.inventory}
        </div>
    );
}

