import React from 'react';

export function Notes({player_data}) {
    return (
        <div className={'notes'}>
            {player_data.notes}
        </div>
    );
}

