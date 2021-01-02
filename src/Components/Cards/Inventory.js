import React from 'react';

export function Inventory({player_data}) {
    return (
        <div className={'inventory'}>
            {player_data.inventory}
        </div>
    );
}

