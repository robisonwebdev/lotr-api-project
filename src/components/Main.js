import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [character, setCharater] = useState('');
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState('');
    const [quotesData, setQuotesData] = useState([]);


    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        setLoading(true);
        console.log('Getting API Data');

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
             .then(res => {
                setQuotesData(res.data);
                setLoading(false);
             })
             .catch(err => console.log(err))
    }, []);

    const getRandomQuote = useCallback(() => {
        let randomQuoteObject = quotesData.docs[Math.floor(Math.random() * quotesData.docs.length)];
        let randomQuote = randomQuoteObject['dialog'];
        let whoSaidQuote = randomQuoteObject['character'];

        setQuote(randomQuote);
        setCharater(whoSaidQuote);
    }, [quotesData.docs]);

    // Check for loading change
    useEffect(() => {
        if (!loading) {
            getRandomQuote();
        }
    }, [loading, getRandomQuote])

    return (
        <main>
            {loading ? <Quote message='Loading...' /> : <Quote characterName={character} message={quote} newQuote={getRandomQuote} />}
        </main>
    );
}

export default Main