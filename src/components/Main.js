import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Quote from './Quote';
import '../styles/Main.css';

const Main = () => {
    const [charactersData, setCharactersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quotesData, setQuotesData] = useState([]);    

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        }

        setLoading(true);

        axios.get(`https://the-one-api.dev/v2/quote`, {headers})
             .then(res => setQuotesData(res.data))
             .catch(err => console.log(err))

        axios.get(`https://the-one-api.dev/v2/character`, {headers})
             .then(res => {
                 setCharactersData(res.data);
                 setLoading(false);
             })
             .catch(err => console.log(err))
    }, [])

    const testAPI = () => {
        if (!loading) {
            console.log('Quotes', quotesData);
            console.log('Characters', charactersData);
        }
    }

    return (
        <main>
            {testAPI()}
            <Quote />
        </main>
    );
}

// const Main = () => {
//     const [character, setCharacter] = useState([]);
//     const [characterID, setCharacterID] = useState('');
//     const [characterName, setCharacterName] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [quotes, setQuotes] = useState([]);
//     const [quote, setQuote] = useState('');
//     const [headers] = useState({
//         'Accept': 'application/json',
//         'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
//     });

//     const generateNewQuote = useCallback(
//         () => {
//             const randomQuote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
//             const newQuote = randomQuote.dialog;
//             const characterID = randomQuote.character;

//             console.log(randomQuote);
//             setCharacterID(characterID);
//             setQuote(newQuote);
//         },
//         [quotes.docs],
//     );

//     const getCharacterName = () => {
//         const name = characterID.docs[0]['name'];

//         setCharacterName(name);
//     }

//     // Initial API Load
//     useEffect(() => {
//         setLoading(true);

//         axios.get(`https://the-one-api.dev/v2/quote`, {headers})
//         .then(res => {
//             setQuotes(res.data);
//             setLoading(false);
//         })
//         .catch(err => console.log('Error:', err))
//     }, [headers])    

//     // Get Character Information
//     useEffect(() => {
//         axios.get(`https://the-one-api.dev/v2/character/${characterID}`, {headers})
//         .then(res => {
//             setCharacter(res.data);
//             // getCharacterName();
//         })
//         .catch(err => console.log('Error:', err))
//     }, [characterID, headers])

//     // Initial Page Load
//     useEffect(() => {
//         if (!loading) {
//             generateNewQuote();
//         }
//     }, [loading, generateNewQuote])

//     return (
//         <main>
//             <Quote
//                 characterName={characterName}
//                 generateNewQuote={generateNewQuote}
//                 quote={quote}
//             />
//         </main>
//     )
// };

export default Main
