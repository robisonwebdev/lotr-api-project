import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [character, setCharacter] = useState([]);
    const [characterID, setCharacterID] = useState('');
    const [loading, setLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');

    // Initial API Load
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        setLoading(true);

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
        .then(res => {
            setQuotes(res.data);
            setLoading(false);
        })
        .catch(err => console.log('Error:', err))
    }, [])

    // Initial Page Load
    useEffect(() => {
        if (!loading) {
            generateNewQuote();
        }
    }, [loading])

    // Get Character Information
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        axios.get(`https://the-one-api.dev/v2/character/${characterID}`, {headers})
        .then(res => setCharacter(res.data))
        .catch(err => console.log('Error:', err))
    }, [characterID])

    const generateNewQuote = () => {
        const randomQuote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
        const newQuote = randomQuote.dialog;
        const characterID = randomQuote.character;

        console.log(randomQuote);
        setCharacterID(characterID);
        setQuote(newQuote);
    }

    return (
        <main>
            <Quote
                character={character}
                generateNewQuote={generateNewQuote}
                quote={quote}
            />
        </main>
    )
};

export default Main
