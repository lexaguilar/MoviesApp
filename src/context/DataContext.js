import React, { createContext, useState }  from 'react';
import { initDates } from '../data/initData';

export const DataContext = createContext();

export const DataProvider = ({  children }) => {
    
    const [ favorites, setFavorites ] = useState([]);
    const [ query, setQuery ] = useState('');
    const [ dates, setDates ] = useState([...initDates]);
    const [ pageNumber, setPageNumber ] = useState(1);

    return(
        <DataContext.Provider value={{favorites, setFavorites, query, setQuery, dates, setDates, pageNumber, setPageNumber}}>
            {children}
        </DataContext.Provider>
    )

}

