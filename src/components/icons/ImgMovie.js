import React, { useEffect, useState } from 'react';
import useImage from '../../hooks/useImage';
import http from '../../utils/http';

const ImgMovie = ({ title }) => {

    const { imgUrl } = useImage({ title });  

    console.log(imgUrl);

    return (
        <div>
            <img className='card__img' src={imgUrl} alt="" />
        </div>
    );
}

export default ImgMovie;
