import React, { Component, Fragment } from "react";
import { abilities, alignments, classes, races } from "../Utils/Data";
import { RollDie } from "../Utils/Functions";

export class CreatePlayer extends Component {
    
    state = {
        formData : {
            name : '',
            family : '',
            codename : '',
            
            stats : [ 0, 0, 0, 0, 0, 0 ],
            
            alignment : -1,
            race : -1,
            char_class : -1,
            
            height : 0,
            age : 0,
        },
        section : 0,
        rollData : {
            rolls : [ 0, 0, 0 ],
            rolled : false,
            rolling : false,
            total : 0
        },
    }
    
    wrapFormData = ( data ) => {
        this.setState({
            formData : {
                ...this.state.formData,
                ...data
            }
        })
    }
    
    handleChange = ( e ) => {
        let d = {
            [e.target.name] : e.target.value
        }
        
        if ( e.target.name === 'race' && e.target.value !== '-1' ) {
            let r = e.target.value
            d.age = Math.min(Math.max(this.state.formData.age, races[r].age.min), races[r].age.max)
            d.height = Math.min(Math.max(this.state.formData.height, races[r].height.min), races[r].height.max)
        }
        
        this.wrapFormData(d)
    }
    
    rollAbility = ( index = 0, missing_rolls = 20 ) => {
        
        this.setState({
            rollData : {
                ...this.state.rollData,
                rolling : true
            }
        })
        
        let new_rolls = [ ...this.state.rollData.rolls ]
        new_rolls[index] = RollDie()
        
        this.setState({
            rollData : {
                ...this.state.rollData,
                rolls : new_rolls,
            }
        })
        
        if ( missing_rolls === 0 ) {
            if ( index === 2 ) {
                let { rolls } = this.state.rollData;
                let total = rolls[0] + rolls[1] + rolls[2] - Math.min(...rolls);
                this.setState({
                    rollData : {
                        ...this.state.rollData,
                        rolling : false,
                        rolled : true,
                        total
                    }
                })
            } else {
                setTimeout(() => this.rollAbility(index + 1), 50)
            }
        } else {
            setTimeout(() => this.rollAbility(index, missing_rolls - 1), 50)
        }
    }
    
    validSection = () => {
        let { formData } = this.state;
        return true
        return (
            !!formData.name &&
            !!formData.codename &&
            formData.alignment !== -1 &&
            formData.race !== -1 &&
            formData.char_class !== -1 &&
            formData.age <= races[formData.race].age.max &&
            formData.age >= races[formData.race].age.min &&
            formData.height <= races[formData.race].height.max &&
            formData.height >= races[formData.race].height.min
        )
    }
    
    validSend = () => {
        let { formData } = this.state;
        
        return (
            !!formData.stats[0] &&
            !!formData.stats[1] &&
            !!formData.stats[2] &&
            !!formData.stats[3] &&
            !!formData.stats[4] &&
            !!formData.stats[5]
        )
    }
    
    doSend = () => {
        console.log(this.state)
    }
    
    assignRoll = ( id ) => {
        let { stats } = this.state.formData;
        let { rollData } = this.state;
        if ( rollData.rolled ) {
            stats[id] = rollData.total
            
            this.setState({
                formData : {
                    ...this.state.formData,
                    stats
                },
                rollData : {
                    rolls : [ 0, 0, 0 ],
                    rolled : false,
                    rolling : false,
                    total : 0
                },
                rolledStats : this.state.rolledStats + 1
            })
        }
    }
    
    trySwap = ( id = -1 ) => {
        let { swapStats, formData } = this.state;
        let { stats } = formData
        
        if ( swapStats[0] === -1 ) {
            swapStats[0] = id;
        } else if ( swapStats[1] === -1 ) {
            swapStats[1] = id;
            setTimeout(this.trySwap, 200)
        } else {
            let stat1 = stats[swapStats[0]]
            stats[swapStats[0]] = stats[swapStats[1]]
            stats[swapStats[1]] = stat1
            swapStats = [ -1, -1 ]
        }
        
        this.setState({ swapStats, formData : { ...formData, stats } })
    }
    
    render = () => {
        let { formData, section, rollData } = this.state;
        
        return <div className={'new-player'}>
            <form className={'enter-form'} onSubmit={e => {
                e.preventDefault()
            }}>
                <div className={'section' + (section === 0 ? '' : ' hidden')}>
                    <input
                        placeholder={'Codename'}
                        name={'codename'}
                        value={formData.codename}
                        onChange={this.handleChange}
                    />
                    
                    <div className={'input-group'}>
                        <input
                            placeholder={'Name'}
                            name={'name'}
                            value={formData.name}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder={'Family Name'}
                            name={'family'}
                            value={formData.family}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className={'input-group'}>
                        <select
                            name={'race'}
                            value={formData.race}
                            onChange={this.handleChange}
                        >
                            <option value={-1}>Race</option>
                            {
                                races.map(( item, i ) => {
                                    return <option key={i} value={i}>
                                        {item.name}
                                    </option>
                                })
                            }
                        </select>
                        
                        <select
                            name={'char_class'}
                            value={formData.char_class}
                            onChange={this.handleChange}
                        >
                            <option value={-1}>Class</option>
                            {
                                classes.map(( item, i ) => {
                                    return <option key={i} value={i}>
                                        {item.name}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    
                    <select
                        name={'alignment'}
                        value={formData.alignment}
                        onChange={this.handleChange}
                    >
                        <option value={-1}>Alignment</option>
                        {
                            alignments.map(( item, i ) => {
                                return <option key={i} value={i}>
                                    {item.name}
                                </option>
                            })
                        }
                    </select>
                    
                    <div className={'range-input'}>
                        <div>
                            Height:
                            <input
                                className={'short'}
                                placeholder={'0'}
                                name={'height'}
                                value={formData.height}
                                onChange={this.handleChange}
                            />
                            cm.
                        </div>
                        <input
                            type={'range'}
                            name={'height'}
                            disabled={formData.race === -1}
                            min={races[formData.race]?.height.min}
                            max={races[formData.race]?.height.max}
                            value={formData.height}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className={'range-input'}>
                        <div>
                            Age:
                            <input
                                className={'short'}
                                placeholder={'0'}
                                name={'age'}
                                value={formData.age}
                                onChange={this.handleChange}
                            />
                            years
                        </div>
                        <input
                            type={'range'}
                            name={'age'}
                            disabled={formData.race === -1}
                            min={races[formData.race]?.age.min}
                            max={races[formData.race]?.age.max}
                            value={formData.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <button
                        className={'primary'}
                        children={'Next'}
                        disabled={!this.validSection()}
                        onClick={() => {
                            if ( this.validSection() ) {
                                this.setState({
                                    section : 1
                                })
                            }
                        }}
                    />
                </div>
                <div className={'color-bar'} />
                <div className={'section' + (section === 1 ? '' : ' hidden')}>
                    
                    <h1>
                        Abilities
                    </h1>
                    
                    <div className={'ability-roll'}>
                        <div className={'rolls-display'}>
                            {rollData.rolls.map(( item, i ) => {
                                return <div key={i}>
                                    {item}
                                </div>
                            })}
                        </div>
                        
                        <button
                            className={'primary' + (rollData.rolled ? ' success' : '')}
                            onClick={() => {
                                if ( !rollData.rolling && !rollData.rolled ) {
                                    this.rollAbility()
                                }
                            }}
                        >
                            {rollData.rolled ? rollData.total : 'Roll'}
                        </button>
                    </div>
                    
                    <div className={'ability-list'}>
                        {abilities.map(( item, i ) => {
                            return <button
                                className={'secondary ability-display' + (formData.stats[i] !== 0 ? ' success' : '')}
                                title={'Assign to ' + item.name}
                                key={i}
                                onClick={() => {
                                    if (formData.stats[i] === 0) {
                                        this.assignRoll(i)
                                    }
                                }}
                            >
                                {item.shortname+' : ' + formData.stats[i]}
                            </button>
                        })}
                    </div>
                    
                    <div className={'input-group'}>
                        <button
                            className={'secondary'}
                            children={'Back'}
                            onClick={() =>
                                this.setState({
                                    section : 0
                                })}
                        />
                        <button
                            className={'primary'}
                            children={'Crear'}
                            onClick={() => {
                                if ( this.validSend() ) {
                                    this.doSend()
                                }
                            }}
                        />
                    </div>
                </div>
            </form>
        </div>
    }
}
