import React, { Component, Fragment } from 'react';
import { Panel } from "./Components/Panel";

export class App extends Component {
    
    state = {
        player_id : '',
        player_data : undefined,
        player_inventory : [],
        player_spells : [],
        player_notes : [],
        player_quests : [],
    }
    
    updatePlayerData = () => {
        // findCharacter(this.state.player_data.codename).then(r => {
        //     this.setState({
        //         player_data : r
        //     })
        // })
        //
        // fetchInventory(this.state.player_data._id).then(r => {
        //     this.setState({
        //         player_inventory : r
        //     })
        // })
        //
        // fetchSpells(this.state.player_data._id).then(r => {
        //     this.setState({
        //         player_spells : r
        //     })
        // })
    }
    
    render() {
        const { player_data, player_inventory, player_spells } = this.state;
        
        return <Fragment>
            <Panel player_data={player_data} player_inventory={player_inventory} player_spells={player_spells} />
            <Panel player_data={player_data} player_inventory={player_inventory} player_spells={player_spells} />
            <Panel player_data={player_data} player_inventory={player_inventory} player_spells={player_spells} />
        </Fragment>
        
    }
}

