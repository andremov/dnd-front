import React, { Component, Fragment } from 'react';
import { cards } from "./Utils/Data";
import { Header } from "./Components/Header";
import { Panel } from "./Components/Panel";

export class App extends Component {
    
    state = {
        player_data : undefined,
        
        panel_data : {},
        
        cards_data : [],
        
        // main_value : 2,
        // main_destination : 0,
        // main_data : undefined,
        //
        // window_values : [],
        // window_destinations : [],
        // window_data : [],
    }
    
    handleCard = ( { action, card_id, data } ) => {
        if ( action === 'add' ) {
            this.addCard(data)
        } else if ( action === 'remove' ) {
            this.removeCard(card_id)
        } else if ( action === 'modify' ) {
            this.modifyCard(card_id, data)
        } else if ( action === 'change_destination' ) {
            this.changeCardDestination(card_id, data)
        } else if ( action === 'go_to_destination' ) {
            this.gotoCardDestination(card_id)
        }
    }
    
    addCard = ( data ) => {
        let { cards_data } = this.state;
        
        let place = -1;
        for ( let i = 0; i < cards_data.length; i++ ) {
            if ( cards_data[i].card_name === 'hidden' ) {
                place = i;
                break;
            }
        }
        
        if ( place === -1 ) {
            place = cards_data.length
            cards_data.push({})
        }
        
        cards_data[place] = data;
        this.setState({ cards_data })
        this.cleanCards();
        
        setTimeout(() => this.gotoCardDestination(place), 1000)
    }
    
    removeCard = ( card_id ) => {
        let { cards_data } = this.state;
        
        cards_data[card_id] = {
            card_name : 'hidden'
        }
        
        this.setState({ cards_data })
        this.cleanCards();
    }
    
    modifyCard = ( card_id, data ) => {
        let { cards_data } = this.state;
        
        cards_data[card_id] = data;
        
        this.setState({ cards_data })
        this.cleanCards();
    }
    
    changeCardDestination = ( card_id, data ) => {
        let { cards_data } = this.state;
        
        cards_data[card_id].card_destination = data.card_destination;
        
        this.setState({ cards_data })
        this.cleanCards();
    }
    
    gotoCardDestination = ( card_id ) => {
        let { cards_data } = this.state;
        
        cards_data[card_id].card_name = cards_data[card_id].card_destination;
        cards_data[card_id].card_destination = 'loading';
        
        this.setState({ cards_data })
        this.cleanCards();
    }
    
    cleanCards = () => {
        let { cards_data } = this.state;
        for ( let i = cards_data.length - 1; i >= 0; i-- ) {
            if ( cards_data[i].card_name === 'hidden' ) {
                cards_data.splice(i, 1)
            }
        }
        
        this.setState({ cards_data })
    }
    
    render() {
        const { player_data, panel_data, cards_data } = this.state;
        
        return (
            <Fragment>
                <Header callback={this.handleCard} />
                
                <Panel type={''}>
                    {/*{app_states[main_value].component({*/}
                    {/*    values : app_states[main_value],*/}
                    {/*    app_data : main_data,*/}
                    {/*    player_data : player_data,*/}
                    {/*    eventCallback : this.handleEvent,*/}
                    {/*})}*/}
                </Panel>
                
                <div className={'card-holder-panel'}>
                    <div className={'board'}>
                        {cards_data.map(( item, i ) => {
                            
                            return <Fragment key={i}>
                                {cards[item.card_name].component(
                                    {
                                        card_data : item,
                                        card_id : i,
                                        player_data : player_data,
                                        eventCallback : this.handleCard
                                    }
                                )}
                            </Fragment>
                            
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

