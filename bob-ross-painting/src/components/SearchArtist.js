import React from 'react';

const SearchArtist = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <button 
                className='pa3 br3 br--left dim buttonA'
                onClick={searchChange}
                value='Victor Prato'
            >
                Victor
            </button>
            <button 
                className='pa3 bl dim buttonA'
                onClick={searchChange}
                value='Kimberly Spiegel'
            >
                Kim
            </button>
            <button 
                className='pa3 br3 br--right dim buttonA'
                onClick={searchChange}
                value=''
            >
                Reset
            </button>
        </div>
    );
}

export default SearchArtist;