import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const Favorites = () => {

    const { query, setQuery } = useContext(DataContext);

    console.log(query);

    return (
        <div>
            
        </div>
    );
}

export default Favorites;
