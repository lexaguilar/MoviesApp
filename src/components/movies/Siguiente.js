import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const Siguiente = ({ pageNumber }) => {

    const { setPageNumber } = useContext(DataContext); 

    const nextPage = () => setPageNumber(pageNumber + 1);

    return (
        <button type='button' onClick={nextPage} className='btn text-color-black'>Next </button>
    );
}

export default Siguiente;
