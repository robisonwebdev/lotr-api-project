import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [character, setCharacter] = useState('');
    const [CharacterData, setCharacterData] = useState([]);
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    const [loadingQuotes, setLoadingQuotes] = useState(true);
    const [quote, setQuote] = useState('');
    const [quotesData, setQuotesData] = useState([]);

    // Initial Quotes API Load
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        setLoadingQuotes(true);

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
             .then(res => {
                setQuotesData(res.data);
                setLoadingQuotes(false);
             })
             .catch(err => console.log(err))
    }, []);

    // Initial Characters API Load
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        setLoadingCharacter(true);

        axios.get(`https://the-one-api.dev/v2/character`, {headers})
             .then(res => {
                setCharacterData(res.data.docs);
                setLoadingCharacter(false);
             })
             .catch(err => console.log(err))
    }, []);

    const getCharacterName = useCallback((whoSaidQuote) => {
        const name = CharacterData.find(character => character['_id'] === whoSaidQuote);
        setCharacter(name.name);
    }, [CharacterData]);

    const getRandomQuote = useCallback(() => {
        let randomQuoteObject = quotesData.docs[Math.floor(Math.random() * quotesData.docs.length)];
        let randomQuote = randomQuoteObject['dialog'];
        let whoSaidQuote = randomQuoteObject['character'];

        getCharacterName(whoSaidQuote);
        setQuote(randomQuote);
    }, [quotesData.docs, getCharacterName]);

    // Check for loading changes
    useEffect(() => {
        if (!loadingQuotes && !loadingCharacter) {
            getRandomQuote();
        }
    }, [loadingCharacter, loadingQuotes, getRandomQuote])

    return (
        <main>
            {loadingQuotes ? <Quote message='Loading...' /> : <Quote characterName={character} message={quote} newQuote={getRandomQuote} />}
        </main>
    );
}

export default Main