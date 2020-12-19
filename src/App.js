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

export class App extends Component {
    
    state = {
        player_data : undefined,
        
        window_values : [ 2 ],
        window_destinations : [ 0 ],
        window_data : [ undefined ],
    }
    
    handleEvent = ( { event_name, event_window = 0, event_data = undefined } ) => {
        let { window_values, window_destinations, window_data } = this.state;
        
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
                setTimeout(() => this.handleEvent({ event_name, event_window : window_values.length - 1, event_data }), 100)
            } else {
                setTimeout(() => this.handleEvent({ event_name, event_window : i, event_data }), 100)
            }
            return
        }
        
        switch ( event_name ) {
            case 'new-player':
                window_values[event_window] = 1
                window_destinations[event_window] = 3
                window_data[event_window] = event_data
                
                this.setState({
                    window_values, window_destinations, window_data
                })
                setTimeout(() => this.finishLoading(event_window), 1000)
                break;
            case 'race-info':
                window_values[event_window] = 1
                window_destinations[event_window] = 4
                window_data[event_window] = event_data
                
                this.setState({
                    window_values, window_destinations, window_data
                })
                setTimeout(() => this.finishLoading(event_window), 1000)
                break;
            case 'class-info':
                window_values[event_window] = 1
                window_destinations[event_window] = 5
                window_data[event_window] = event_data
                
                this.setState({
                    window_values, window_destinations, window_data
                })
                setTimeout(() => this.finishLoading(event_window), 1000)
                break;
            case 'alignment-info':
                window_values[event_window] = 1
                window_destinations[event_window] = 6
                window_data[event_window] = event_data
        
                this.setState({
                    window_values, window_destinations, window_data
                })
                setTimeout(() => this.finishLoading(event_window), 1000)
                break;
            case 'close':
                window_values[event_window] = 0
                window_destinations[event_window] = 5
                window_data[event_window] = event_data
                
                this.setState({
                    window_values, window_destinations, window_data
                })
                
                if ( event_window === window_values.length - 1 ) {
                    setTimeout(() => {
                        window_values.splice(event_window, 1)
                        window_destinations.splice(event_window, 1)
                        window_data.splice(event_window, 1)
                        
                        this.setState({
                            window_values, window_destinations, window_data
                        })
                    }, 1000)
                }
                break;
            case 'create-player':
                let player_data = event_data;
                console.log(player_data)
                break;
        }
    }
    
    finishLoading = ( event_window ) => {
        let { window_values, window_destinations } = this.state;
        window_values[event_window] = window_destinations[event_window]
        window_destinations[event_window] = 0
        
        this.setState({
            window_values, window_destinations
        })
    }
    
    render() {
        const { player_data, window_values, window_data } = this.state;
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
