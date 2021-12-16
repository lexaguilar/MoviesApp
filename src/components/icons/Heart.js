

import React from 'react'
export const ButonHeart = ({onClick, isAdded}) => {

    const classNameIcon = isAdded ? 'icon-heart-added' : 'icon-heart-no-added';

    return <div className={`icon-heart ${classNameIcon}`} onClick={onClick}/>
}