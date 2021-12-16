import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { ButonHeart } from '../icons/Heart';

const Movie = ({ movie }) => {

    const { title, year, info } = movie;
    const { favorites, setFavorites } = useContext(DataContext);
    
    const onClickFavorite = () => {

        if(favorites.includes(movie.title)) {
            
            const newList = [...favorites].filter(favorite => favorite !== movie.title);
            
            setFavorites([ ...newList ]);

        }else{

            setFavorites([...favorites, movie.title]);

        }

    }

    const thisMovieIsAdded = favorites.includes(movie.title);

    const shareMove = () => {

        

    }

    return (       
        <div class="movie-card">
            <div className="movie-card__img">
                <img className='card__img' src="" alt="" />
            </div>
            <div class="movie-card__share">
                <ButonHeart onClick={onClickFavorite} isAdded={thisMovieIsAdded}/>
            </div>
            <div class="movie-card__content">
                <div class="movie-card__header">
                    <h1 class="movie-card__title">{title}</h1>
                    <h4 class="movie-card__info">({year}) {info.genres.join(',')}</h4>
                </div>
                <p class="movie-card__desc">{info.plot}</p>
                <button class="btn btn-outline movie-card__button" type="button" onClick={shareMove}>
                    Compartir
                    <img className='icon-shared' src="https://img.icons8.com/color/48/000000/share-2.png"/>
                </button>
            </div>
        </div>          
    );
}

export default Movie;
