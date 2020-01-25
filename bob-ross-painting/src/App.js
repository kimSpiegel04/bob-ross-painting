import React from 'react';
import CardList from './CardList';
import Search from './Search';
import { paintings } from './paintings';

const App = () => {
    return (
        <div className='tc'>
            {/* Header */}
            <h1>Victor and Kim's Happy Little Paintings</h1>
            {/* Search box */}
            <Search />
            {/* CardList renders the Card of paintings */}
            <CardList paintings={paintings} />
        </div>
    );
}

export default App;