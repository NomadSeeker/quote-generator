import React, { useCallback, useEffect, useState } from 'react';

import {fetchData} from '../shared/api';

import './Quote.css';


type QuoteType = {
    id: number;
    advice: string;
};

const initialState:QuoteType = {
    id: -1,
    advice: ''
}

const Quote = () => {
    const [quote, setQuote] = useState<QuoteType>(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const getData = useCallback(async () => {
        const response = await fetchData();
        const newQuote = {
            id: response.slip.id,
            advice: response.slip.advice
        };

        setQuote(newQuote);
    }, []);
  

    useEffect(() => {
        getData();
    }, [getData]);

    if(isLoading)
        return (<p>Loading...</p>);


    return (
        <>
            <div className='container'>
                {quote ? <h3>"{quote.advice}"</h3> : <h1>No quote found</h1>}
                <hr/>
                <input className='btn' type='button' value="Get Advice" onClick={getData}/>
                
            </div>
            
        </>
    );

};

export default Quote;
