import React from 'react';

export function TradeItemCard( { data, changeAmount } ) {
    
    if ( !data.trade_amount ) {
        data.trade_amount = 0
    }
    
    return (
        <div className={'trade-item-card'}>
            <div>
                <div>{data.name}</div>
                <div>x{data.quantity}</div>
            </div>
            <div>
                {data.data}
            </div>
            <div>
                <button
                    className={'primary'}
                    children={'-'}
                    disabled={data.trade_amount === 0}
                    onClick={() => changeAmount(data.trade_amount - 1)}
                />
                
                <span>
                    {data.trade_amount}
                </span>
                
                <button
                    className={'primary'}
                    children={'+'}
                    disabled={data.trade_amount === data.quantity}
                    onClick={() => changeAmount(data.trade_amount + 1)}
                />
            </div>
        </div>
    );
}

