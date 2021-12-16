import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import useMovies from '../../hooks/useMovies';
import Movie from './Movie';

const Movies = () => {

    const { query } = useContext(DataContext);

    const { data : movies } = useMovies({ title_like: query });

    return (
        <div className='movies-list'>
            { movies && movies.map(movie => <Movie movie={movie} />) }
        </div>
    );
}

export default Movies;
