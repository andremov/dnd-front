import React, { Fragment, useState } from "react";
import { abilities, alignments, classes, races } from "../Utils/Data";
import { RollDie } from "../Utils/Functions";

export function CreatePlayer( { eventCallback } ) {
    const [ formData, setFormData ] = useState({
        name : '',
        family : '',
        codename : '',
        
        stats : [ 0, 0, 0, 0, 0, 0 ],
        
        alignment : -1,
        race : -1,
        char_class : -1,
        
        height : 0,
        age : 0,
    })
    const [ section, setSection ] = useState(0)
    const [ rolls, setRolls ] = useState([
        [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],
    ])
    const [ rolling, setRolling ] = useState(false)
    
    function wrapFormData( data ) {
        setFormData({
            ...formData,
            ...data
        })
    }
    
    function handleChange( e ) {
        
        // handle right age and height
        let d = {
            [e.target.name] : e.target.value
        }
        
        if ( e.target.name === 'race' && e.target.value !== '-1' ) {
            let r = e.target.value
            d.age = Math.min(Math.max(formData.age, races[r].age.min), races[r].age.max)
            d.height = Math.min(Math.max(formData.height, races[r].height.min), races[r].height.max)
        }
        
        wrapFormData(d)
    }
    
    function rollAbility( ability, index = 0, missing_rolls = 20 ) {
        setRolling(true)
        let new_rolls = [ ...rolls ]
        new_rolls[ability][index] = RollDie()
        setRolls(new_rolls)
        if ( missing_rolls === 0 ) {
            if ( index === 3 ) {
                let new_stats = [ ...formData.stats ]
                new_stats[ability] = new_rolls[ability][0] + new_rolls[ability][1]
                new_stats[ability] += new_rolls[ability][2] + new_rolls[ability][3] - Math.min(...new_rolls[ability])
                setFormData({
                    ...formData,
                    stats : new_stats
                })
                setRolling(false)
            } else {
                setTimeout(() => rollAbility(ability, index + 1), 50)
            }
        } else {
            setTimeout(() => rollAbility(ability, index, missing_rolls - 1), 50)
        }
    }
    
    function validSection() {
        return (
            !!formData.name &&
            !!formData.codename &&
            formData.alignment !== -1 &&
            formData.race !== -1 &&
            formData.char_class !== -1 &&
            formData.age < races[formData.race].age.max &&
            formData.age > races[formData.race].age.min &&
            formData.height < races[formData.race].height.max &&
            formData.height > races[formData.race].height.min
        )
    }
    
    function validSend() {
        return (
            !!formData.stats[0] &&
            !!formData.stats[1] &&
            !!formData.stats[2] &&
            !!formData.stats[3] &&
            !!formData.stats[4] &&
            !!formData.stats[5]
        )
    }
    
    return <div className={'new-player'}>
        <form className={'enter-form'} onSubmit={e => {
            e.preventDefault()
        }}>
            <div className={'section' + (section === 0 ? '' : ' hidden')}>
                <input
                    placeholder={'Codename'}
                    name={'codename'}
                    value={formData.codename}
                    onChange={handleChange}
                />
                
                <div className={'input-group'}>
                    <input
                        placeholder={'Name'}
                        name={'name'}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        placeholder={'Family Name'}
                        name={'family'}
                        value={formData.family}
                        onChange={handleChange}
                    />
                </div>
                
                <div className={'input-group'}>
                    <select
                        name={'race'}
                        value={formData.race}
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                    onChange={handleChange}
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
                
                <div className={'range-input'} >
                    <div>
                        Height:
                        <input
                            className={'short'}
                            placeholder={'0'}
                            name={'height'}
                            value={formData.height}
                            onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                
                <div className={'range-input'} >
                    <div>
                        Age:
                        <input
                            className={'short'}
                            placeholder={'0'}
                            name={'age'}
                            value={formData.age}
                            onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                
                <button
                    className={'primary'}
                    children={'Next'}
                    disabled={!validSection()}
                    onClick={() => {
                        if ( validSection() ) {
                            setSection(1)
                        }
                    }}
                />
            </div>
            <div className={'color-bar'} />
            <div className={'section' + (section === 1 ? '' : ' hidden')}>
                
                <h1>
                    Abilities
                </h1>
                
                {abilities.map(( item, i ) => {
                    return <div className={'ability-entry'} key={i}>
                    <span style={{ width : '100px' }}>
                        {item.name}
                    </span>
                        <span>
                        {rolls[i].map(( item, i ) => {
                            return <Fragment key={i}>
                                {item} {i + 1 < rolls[i].length ? ' - ' : ''}
                            </Fragment>
                        })}
                        
                    </span>
                        <button
                            disabled={formData.stats[i] !== 0}
                            className={'primary' + (formData.stats[i] === 0 ? '' : ' success')}
                            children={formData.stats[i] === 0 ? 'Roll' : formData.stats[i]}
                            onClick={() => {
                                if ( !rolling ) {
                                    rollAbility(i)
                                }
                            }}
                        />
                    </div>
                })}
                
                <div className={'input-group'}>
                    <button
                        className={'secondary'}
                        children={'Back'}
                        onClick={() => setSection(0)}
                    />
                    <button
                        className={'primary'}
                        children={'Crear'}
                        onClick={() => {
                            if ( validSend() ) {
                                let player_data = JSON.parse(JSON.stringify(formData))
                                for ( let i = 0; i < abilities.length; i++ ) {
                                    player_data['stat_' + abilities[i].shortname.toLowerCase()] = player_data.stats[i]
                                }
                                delete player_data.stats
                                eventCallback({ event_name : 'create-player', event_data : player_data })
                            }
                        }}
                    />
                </div>
            </div>
        </form>
    </div>
}
