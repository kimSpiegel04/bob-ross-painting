import React from 'react';
import Popup from 'reactjs-popup';

// The Card will render the painting, artist, date, etc. 
const Card = ({ id, img, title, artist, date }) => {
    return (
        <Popup trigger={        
            <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 card button'>
                <img alt={`${title} by ${artist}`} src={img} width="270" height="200" id={id} />
                <h2>{title}</h2>
                <p>{`${artist}, ${date}`}</p>
            </div>
        } modal>
            <div className='content'>
                <div className='tc'>
                    {" "}
                    <img alt={`${title} by ${artist}`} src={img} width="400" height="300" id={id} />
                    <h2>{title}</h2>
                    <p>{`${artist}, ${date}`}</p>
                </div>
            </div>
        </Popup >
    )
}

export default Card;