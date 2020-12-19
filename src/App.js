import React, { Component, Fragment } from 'react';
import { app_states } from "./Utils/Data";
import { Loading } from "./Components/Loading";
import { EnterForm } from "./Components/EnterForm";
import { CreatePlayer } from "./Components/CreatePlayer";
import { RaceInfo } from "./Components/RaceInfo";
import { ClassInfo } from "./Components/ClassInfo";
import { ExitButton } from "./Components/ExitButton";
import { Gem } from "./Components/Gem";
import { Header } from "./Components/Header";
import { AlignmentInfo } from "./Components/AlignmentInfo";
import { Panel } from "./Components/Panel";

export class App extends Component {
    
    state = {
        player_data : undefined,
        
        main_value : 2,
        main_destination : 0,
        main_data : undefined,
        
        window_values : [],
        window_destinations : [],
        window_data : [],
    }
    
    handleEvent = ( { event_name, event_window = 50, event_data = undefined } ) => {
        let { window_values, window_destinations, window_data, main_value, main_destination, main_data } = this.state;
        
        if ( event_window >= window_values.length ) {
            let i = 0;
            while ( window_values[i] !== 0 && i < window_values.length ) {
                i += 1
            }
            if ( i === window_values.length ) {
                window_values.push(0)
                window_destinations.push(0)
                window_data.push(undefined)
                
                this.setState({
                    window_values, window_destinations, window_data
                })
                setTimeout(
                    () => this.handleEvent({ event_name, event_window : window_values.length - 1, event_data }), 100)
            } else {
                setTimeout(() => this.handleEvent({ event_name, event_window : i, event_data }), 100)
            }
            return
        }
        
        let timeoutBehavior = () => {
        }
        let newState = {}
        
        function modify( new_value, new_destination ) {
            if ( event_window === -1 ) {
                main_value = new_value;
                main_destination = new_destination;
                main_data = event_data;
            } else {
                window_values[event_window] = new_value
                window_destinations[event_window] = new_destination
                window_data[event_window] = event_data
            }
        }
        
        switch ( event_name ) {
            case 'new-player':
                modify(1, 3)
                
                timeoutBehavior = () => this.finishLoading(event_window)
                break;
            case 'race-info':
                modify(1, 4)
                
                timeoutBehavior = () => this.finishLoading(event_window)
                break;
            case 'class-info':
                modify(1, 5)
                
                timeoutBehavior = () => this.finishLoading(event_window)
                break;
            case 'alignment-info':
                modify(1, 6)
                
                timeoutBehavior = () => this.finishLoading(event_window)
                break;
            case 'close':
                modify(0, 5)
                
                if ( event_window === window_values.length - 1 ) {
                    timeoutBehavior = () => {
                        window_values.splice(event_window, 1)
                        window_destinations.splice(event_window, 1)
                        window_data.splice(event_window, 1)
                        
                        this.setState({
                            window_values, window_destinations, window_data
                        })
                    }
                }
                break;
            case 'create-player':
                let player_data = event_data;
                console.log(player_data)
                break;
        }
        
        this.setState({
            window_values, window_destinations, window_data,
            main_value, main_destination, main_data
        });
        setTimeout(timeoutBehavior, 1000);
    }
    
    finishLoading = ( event_window ) => {
        let { window_values, window_destinations, main_value, main_destination } = this.state;
        if ( event_window === -1 ) {
            main_value = main_destination;
            main_destination = 0;
        } else {
            window_values[event_window] = window_destinations[event_window]
            window_destinations[event_window] = 0
        }
        
        this.setState({
            window_values, window_destinations, main_value, main_destination
        })
    }
    
    render() {
        const { player_data, window_values, window_data, main_data, main_value } = this.state;
        let w_val = [ ...window_values ]
        for ( let i = 0; i < w_val.length; i++ ) {
            w_val[i] = app_states[w_val[i]]
        }
        
        return (
            <Fragment>
                <Header callback={this.handleEvent} />
                <Panel type={''}>
                    {app_states[main_value].component({
                        values : app_states[main_value],
                        app_data : main_data,
                        player_data : player_data,
                        eventCallback : this.handleEvent,
                    })}
                </Panel>
                <div className={'card-holder'}>
                    {w_val.map(( item, i ) => {
                        
                        return <div className={'app-card'} key={i}>
                            <ExitButton
                                canExit={item.app_value > 1}
                                exitCallback={() => this.handleEvent({ event_name : 'close', event_window : i })}
                            />
                            {
                                item.component({
                                    values : item,
                                    app_data : window_data[i],
                                    player_data : player_data,
                                    eventCallback : this.handleEvent,
                                })
                            }
                        </div>
                        
                    })}
                </div>
            </Fragment>
        );
    }
}
