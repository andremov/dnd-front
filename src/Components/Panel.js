import React, { useState } from 'react';
import { getPanel, getPanels } from "../Utils/Data";

export function Panel( props ) {
    const [ panel, setPanel ] = useState(-1)
    
    function handleChangePanel( e ) {
        setPanel(parseInt(e.target.value))
    }
    
    return (
        <div className={'panel'}>
            
            <div className={'panel-header'}>
                <select value={panel} onChange={handleChangePanel}>
                    <option value={-1}>
                        Select panel...
                    </option>
                    
                    {
                        getPanels(props.id, !!props.player_data).sort((a,b) => a.name < b.name? -1 : 1).map(( item, i ) => {
                        return <option value={item.id} key={i}>
                            {item.name}
                        </option>
                    })}
                </select>
            </div>
            
            <div className={'panel-contents'}>
                {
                    getPanel(panel, props)
                }
            </div>
        </div>
    );
}

