import React, { useEffect, useState } from 'react';
import http from '../utils/http';

const useImage = ({ title }) => {
    
    const [imgUrl, setImgUrl] = useState([]);

    const callApi = async () => {

        const url = `http://www.omdbapi.com/?s=${title}&apikey=d489d640`;       

        const resp = await http(url).asGet();

        if(resp?.Search?.length){

            setImgUrl(resp.Search[0].Poster);

        }else{
            setImgUrl(null);
        }

    } 

    useEffect(() => {

        callApi();
       
    }, [title]);

    return {
        imgUrl
    }
    
}

export default useImage;
