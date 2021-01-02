import React from 'react';

export function Notes({player_data}) {
    return (
        <div className={'notes'}>
            <h1>Notes</h1>
            {player_data.notes}
        </div>
    );
}

