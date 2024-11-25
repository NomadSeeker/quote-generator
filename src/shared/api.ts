import React from 'react';
import axios from 'axios';


const apiUrl = 'https://api.adviceslip.com/advice';

export async function fetchData() {

    try {
        const response = await axios.get(apiUrl);
        if(!response)
            return new Error(`Not able to retrieve quote`);

        return response.data;
    }catch(err) {
        return new Error(`Error fetching quote data: ${err}`);
    }
}   