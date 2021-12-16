import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/DataContext';

const SearchBar = () => {

    const [text, setText] = useState('');
    const { setQuery } = useContext(DataContext);

    const onTextChange = (e) => setText(e.target.value);

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={onTextChange} />
            <button onClick={() => setQuery(text)}>Search</button>
        </div>
    );
}

export default SearchBar;
