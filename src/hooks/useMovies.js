import React, { useEffect, useState } from 'react';
import http from '../utils/http';
import { initDates } from '../data/initData';
import { getMovies } from '../services/getMovies';

const useMovies = ({ title_like='', genders = [], dates = [1900, 2021], pageSize = 8, pageNumber = 1 }) => {
    
    const [data, setData] = useState([]);

    const callApi = async () => {

        const resp = await getMovies({ title_like, dates, pageSize, pageNumber  });

        console.log(resp);

        setData(resp);

    } 

    useEffect(() => {

        callApi();
       
    }, [title_like, dates, pageNumber]);

    return {
        data
    }
    
}

export default useMovies;
