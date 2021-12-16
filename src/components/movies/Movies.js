import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import useMovies from '../../hooks/useMovies';
import ShareMovie from '../dialog/ShareMovie';
import Movie from './Movie';
import Siguiente from './Siguiente';

const Movies = () => {

    const { query, dates, pageNumber } = useContext(DataContext);

    const [currentInfo, setCurrentInfo] = useState({
        movie: {},
        isOpen: false
    });

    const { data: { data: movies, totalCounts } } = useMovies({ title_like: query, dates, pageNumber });

    const onOpenFavorite = movie => setCurrentInfo({ movie, isOpen: true });
    const onCloseFavorite = () => setCurrentInfo({ movie: {}, isOpen: false });

    return (
        <div className="movies">
            <div className='movies-total text-color-black'><h3>Total: {totalCounts}</h3></div>
            <div className='movies-list'>
                {
                    movies && movies.map(movie => <Movie movie={movie} onOpenFavorite={onOpenFavorite} />)
                }

            </div>
            <ShareMovie currentInfo={currentInfo} onCloseFavorite={onCloseFavorite} />
            <Siguiente pageNumber={pageNumber} />
        </div>

    );
}

export default Movies;
