import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
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

    useEffect(() => {
        if (!loading) {
            getRandomQuote();
        }
    }, [loading])

    const getRandomQuote = () => {
        let randomQuote = quotesData.docs[Math.floor(Math.random() * quotesData.docs.length)]['dialog'];
        setQuote(randomQuote);
    }

    return (
        <main>
            {loading ? <Quote message='Loading...' /> : <Quote message={quote} />}
        </main>
    );
}

export default Main