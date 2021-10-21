import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
        .then(res => setQuotes(res.data))
        .catch(err => console.log('Error:', err))
    }, [])

    const generateNewQuote = () => {
        const randomQuote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
        const newQuote = randomQuote.dialog;

        setQuote(newQuote);
    }

    return (
        <main>
            <Quote
                generateNewQuote={generateNewQuote}
                quote={quote}
            />
        </main>
    )
};

export default Main
