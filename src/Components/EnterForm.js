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
                onClick={() => eventCallback({ event_window: -1, event_name : 'new-player' })}
            />
        </form>
    </div>
}
