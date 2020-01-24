import React from 'react';
import Card from './Card';

const CardList = ({paintings}) => {
    return (
        <div>
            {
                paintings.map((paint, i)=>{
                    return (
                        <Card
                            key={i}
                            artist={paintings[i].artist}
                            img={paintings[i].img}
                            title={paintings[i].title}
                            date={paintings[i].date}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;