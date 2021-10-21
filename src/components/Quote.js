import React from 'react'

const Quote = ({ quote }) => {
    return (
        <div className='quote'>
            <h1>{quote}</h1>
            <button type='button'>New Quote</button>
        </div>
    )
}

export default Quote
