import React from 'react'

const Quote = ({ characterName, message, newQuote }) => {
    return (
        <div className='quote'>
            <h1>{message}</h1>
            <p>--{characterName}--</p>
            <button type='button' onClick={newQuote}>New Quote</button>
        </div>
    )
}

export default Quote
