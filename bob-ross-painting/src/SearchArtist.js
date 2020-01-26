import React from 'react';

const SearchArtist = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <button 
                className='pa2 br3 br--left dim bg-light-green'
                onClick={searchChange}
                value='Victor Prato'
            >
                Victor
            </button>
            <button 
                className='pa2 bl dim bg-light-green'
                onClick={searchChange}
                value='Kimberly Spiegel'
            >
                Kim
            </button>
            <button 
                className='pa2 br3 br--right dim bg-light-green'
                onClick={searchChange}
                value=''
            >
                Reset
            </button>
        </div>
    );
}

export default SearchArtist;