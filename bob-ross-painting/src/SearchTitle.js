import React from 'react';

const SearchTitle = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3'
                type='search' 
                placeholder='search paintings'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchTitle;