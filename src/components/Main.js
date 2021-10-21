import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
        .then(res => setQuotes(res.data))
        .catch(err => console.log('Error:', err))
    }, [])

    return (
        <main>
            <Quote />
        </main>
    )
};

export default Main
