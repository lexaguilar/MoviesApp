import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import ShareMovie from '../dialog/ShareMovie';
import { ButonHeart } from '../icons/Heart';
import ImgMovie from '../icons/ImgMovie';

const Movie = ({ movie, onOpenFavorite }) => {

    const { title, year, info } = movie;
    const { favorites, setFavorites } = useContext(DataContext);

    
    const onClickFavorite = () => {

        if(favorites.includes(title)) {
            
            const newList = [...favorites].filter(favorite => favorite !== title);
            
            setFavorites([ ...newList ]);

        }else{

            setFavorites([...favorites, title]);

        }

    }

    const thisMovieIsAdded = favorites.includes(title);

    const shareMove = () => {

        onOpenFavorite( movie );

    }

    return (       
        <div class="movie-card">
            <div className="movie-card__img">
                <ImgMovie title={title} />
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
