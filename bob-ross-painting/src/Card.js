import React from 'react';

// The Card will render the painting, artist, date, etc. 
const Card = ({ id, img, title, artist, date }) => {
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={`${title} by ${artist}`} src={img} width="400" height="300" id={id} />
            <h2>{title}</h2>
            <p>{`${artist}, ${date}`}</p>
        </div>
    )
}

export default Card;