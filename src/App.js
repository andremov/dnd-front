import React, { Component, Fragment } from 'react';
import { Panel } from "./Components/Panel";
import { getAllPlayerData } from "./Services/api";

export class App extends Component {
    
    state = {
        player_id : '',
        player_data : undefined,
        player_items : [],
        player_spells : [],
        player_notes : [],
        player_quests : [],
    }
    
    setPlayerID = ( player_id ) => {
        this.setState({
            player_id
        })
        setInterval(this.updatePlayerData, 5000)
    }
    
    updatePlayerData = () => {
        getAllPlayerData(this.state.player_id).then(r => {
            this.setState(r)
        })
    }
    
    render() {
        const { player_id, player_data, player_items, player_spells } = this.state;
        
        return <Fragment>
            <Panel
                id={1}
                player_id={player_id}
                player_data={player_data}
                player_inventory={player_items}
                player_spells={player_spells}
                setPlayerData={this.setPlayerID}
            />
            <Panel
                id={2}
                player_id={player_id}
                player_data={player_data}
                player_inventory={player_items}
                player_spells={player_spells}
                setPlayerData={this.setPlayerID}
            />
            <Panel
                id={3}
                player_id={player_id}
                player_data={player_data}
                player_inventory={player_items}
                player_spells={player_spells}
                setPlayerData={this.setPlayerID}
            />
        </Fragment>
        
    }
}

