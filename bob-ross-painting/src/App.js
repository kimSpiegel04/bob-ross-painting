import React, { Component } from 'react';
import CardList from './CardList';
import SearchTitle from './SearchTitle';
import SearchArtist from './SearchArtist';
import { paintings } from './paintings';



class App extends Component {
    constructor(){
        super()
        this.state={
            paintings:paintings,
            searchfield: '',
            painter: ''
        }
    }

    onSearchChange=(e)=>{
        this.setState({ searchfield: e.target.value });
    }

    onArtistChange=(e)=>{
        this.setState({ painter: e.target.value });
    }

    render(){

        const filteredArtist=this.state.paintings.filter(paintings=>{
            return paintings.artist.toLowerCase().includes(this.state.painter.toLowerCase());
        })

        const filteredPaintings=this.state.paintings.filter(paintings=>{
            return paintings.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        console.log(filteredPaintings);
        return (
            <div className='tc'>
                {/* Header */}
                <h1>Victor and Kim's Happy Little Paintings</h1>
                {/* Search box */}
                <SearchTitle searchChange={this.onSearchChange}/>
                {/* CardList renders the Card of paintings */}
                <SearchArtist searchChange={this.onArtistChange}/>
                <CardList paintings={ filteredArtist } />
            </div>
        );
    }
}

export default App;