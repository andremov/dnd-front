import React from "react";

export function EnterForm( { eventCallback } ) {
    return <div className={'enter'}>
        <form className={'enter-form'} onSubmit={e => {
            e.preventDefault()
        }}>
            <input
                placeholder={'Codename'}
            />
            <button
                className={'primary'}
                children={'Enter'}
            />
            <button
                className={'secondary small'}
                children={'Create'}
                onClick={() => {
                    eventCallback({ action : 'modify', data : { name : 'loading', destination : 'new_player' } })
                    setTimeout(() => eventCallback({ action : 'go_to_destination' }), 1000)
                }}
            />
        </form>
    </div>
}
