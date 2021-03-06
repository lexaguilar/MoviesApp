import React from 'react';
import Dialog from '.';
import ImgMovie from '../icons/ImgMovie';

const ShareMovie = ({ currentInfo, onCloseFavorite }) => {
 
    const { isOpen, movie: { title, year } } = currentInfo;

    const sendEmail = () => {

        onCloseFavorite();

    } 

    return (
        <Dialog isOpen={isOpen} close={onCloseFavorite}>
            <form className='share-movie-form'>
                <h2>Sharing {title}</h2>
                <h3>{year}</h3>
                <ImgMovie title={title} />
                <input type="text" placeholder='input destinations' />
                <button type='button' onClick={sendEmail}>Enviar</button>
            </form>
        </Dialog>
    );
}

export default ShareMovie;
