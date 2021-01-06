import React  from 'react';

export function Background({player_data}) {
    return (
        <div className={'bkg-card'}>
            {player_data?.background}
        </div>
    );
}
