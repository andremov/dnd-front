import React, { useState } from 'react';
import { panels } from "../Utils/Data";

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
                    
                    {panels.sort((a,b) => a.name < b.name? -1 : 1).map(( item, i ) => {
                        return <option value={item.id} key={i}>
                            {item.name}
                        </option>
                    })}
                </select>
            </div>
            
            <div className={'panel-contents'}>
                {
                    panels.filter(item => item.id === panel)[0]?.panel(props)
                }
            </div>
        </div>
    );
}

