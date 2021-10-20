import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Main.css';

const Main = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer zOjjtnXi3W7jeEjqZlm8'
        };

        const fetchItems = async () => {
            const getCharacters = await axios(`https://the-one-api.dev/v2/character`, {
                headers: headers
            });

            console.log(getCharacters.data);
        };

        fetchItems();
    }, [])

    return (
        <main>
            
        </main>
    )
};

export default Main
