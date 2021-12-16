import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const Favorites = () => {

    const { favorites } = useContext(DataContext);

    return (
        <div>
            <h2 className='favorite-movie-title'>Favorites Movies</h2>
            {
                favorites && 
                favorites.map(favorite => <div className='favorite-movie'>{favorite}</div>)
            }
        </div>
    );
}

export default Favorites;
