import React from 'react'

const Quote = ({ characterName, message }) => {
    return (
        <div className='quote'>
            <h1>{message}</h1>
            <p>--{characterName}--</p>
            <button type='button'>New Quote</button>
        </div>
    )
}

export default Quote
