import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [character, setCharacter] = useState([]);
    const [loadingQuotes, setLoadingQuotes] = useState(true);
    const [quote, setQuote] = useState('');
    const [quotesData, setQuotesData] = useState([]);
    const [ID, setID] = useState('');

    useEffect(() => {
        console.log('ID:', ID);
        console.log('TypeOf:', typeof ID);
    }, [ID])

    // Initial API Load
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        setLoadingQuotes(true);
        console.log('Getting Quotes API');

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
             .then(res => {
                setQuotesData(res.data);
                setLoadingQuotes(false);
             })
             .catch(err => console.log(err))
    }, []);

    const getRandomQuote = useCallback(() => {
        let randomQuoteObject = quotesData.docs[Math.floor(Math.random() * quotesData.docs.length)];
        let randomQuote = randomQuoteObject['dialog'];
        let whoSaidQuote = randomQuoteObject['character'];

        setQuote(randomQuote);
        setID(whoSaidQuote);
    }, [quotesData.docs]);

    // Check for loading quotes change
    useEffect(() => {
        if (!loadingQuotes) {
            getRandomQuote();
        }
    }, [loadingQuotes, getRandomQuote])


    return (
        <main>
            {loadingQuotes ? <Quote message='Loading...' /> : <Quote characterName={character} message={quote} newQuote={getRandomQuote} />}
        </main>
    );
}

export default Main