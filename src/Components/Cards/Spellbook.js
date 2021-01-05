import React, { Fragment } from 'react';

export function Spellbook( { player_spells } ) {
    return (
        <Fragment>
            {player_spells.length === 0 ?
                <Spell
                    data={{name : 'Nothing', quantity: 0, data: ''}}
                />
                : player_spells.map(( item, i ) => {
                return <Spell key={i} data={item} />
            })}
        </Fragment>
    );
}


function Spell( { data } ) {
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
