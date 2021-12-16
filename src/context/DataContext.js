import React, { createContext, useState }  from 'react';

export const DataContext = createContext();

export const DataProvider = ({  children }) => {
    
    const [ favorites, setFavorites ] = useState([]);
    const [ query, setQuery ] = useState('');

    return(
        <DataContext.Provider value={{favorites, setFavorites, query, setQuery}}>
            {children}
        </DataContext.Provider>
    )

}

