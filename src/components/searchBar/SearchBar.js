import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';

const SearchBar = () => {

    const [text, setText] = useState('');
    const { setQuery, setPageNumber } = useContext(DataContext);

    const onTextChange = (e) => setText(e.target.value);

    const search = () => {

        setPageNumber(1);
        setQuery(text);

    }

    return (
        <div className='content-search-bar'>
            <input type="text" className='text-color-black' placeholder="Search a movie" onChange={onTextChange} />
            <button onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;
