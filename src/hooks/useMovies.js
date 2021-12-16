import React, { useEffect, useState } from 'react';
import http from '../utils/http';

const useMovies = ({ title_like='', genders = [], initDate, endDate, _limit=5, _page=0 }) => {

    const [data, setData] = useState([]);

    const callApi = async () => {

        const resp = await http('movies').asGet({ title_like, _page, _limit  });

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
