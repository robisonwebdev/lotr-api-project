import React from 'react'

const Quote = ({ generateNewQuote, quote }) => {
    return (
        <div className='quote'>
            <h1>{quote}</h1>
            <button type='button' onClick={generateNewQuote}>New Quote</button>
        </div>
    )
}

export default Quote
