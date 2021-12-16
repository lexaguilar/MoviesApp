import React, { useEffect, useState } from 'react';
import http from '../utils/http';

const useMovies = ({ title_like='', genders = [], initDate, endDate, limit=5, page=1 }) => {

    const [data, setData] = useState([]);

    const callApi = async () => {

        const resp = await http('movies').asGet({ title_like });

        setData(resp);

    } 

    useEffect(() => {

        callApi();
       
    }, [title_like]);

    return {
        data
    }
    
}

export default useMovies;
