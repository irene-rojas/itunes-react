import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        term: "",
        results: [],
        gridSpace: 0
    };

    // text field
    onChange = (event) => {
        this.setState({
            term: event.target.value,
        });
        // console.log(this.state.term);
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${this.state.term.replace(/ /g,"+")}&entity=musicTrack&limit=20`)
        .then(res => {
            this.setState({ 
                results: res.data.results,
                gridSpace: this.state.gridSpace + 1
             });
            //  console.log(this.state.results);
        });
    }

  render() {
    return (

    <div className="parallax">

      <div className="App">

        <div className="header">

            <div className="title">
                <h1>iTunes Search</h1>

                <form onSubmit={this.onSubmit} className="searchBar">
                    Search by artist: <input value={this.state.term} onChange={this.onChange} /> 
                    <button>Search!</button>
                </form>
                <br></br>
                Top 20 Results

            </div>

        </div> 

        <div className="masterDiv">

            <div className="resultsDiv">
                {this.state.results.map((result, index) => 
                <div className={`card grid${index} zoom`} key={result.trackId}>
                <a href={result.trackViewUrl} target="_blank" rel="noopener noreferrer" key={index}>
                    <div>
                        <img src={result.artworkUrl100} alt="album art"/>
                            <br></br>
                        Song: {result.trackName}
                            <br></br>
                        Artist: {result.artistName}
                            <br></br>
                        Album: {result.collectionName}
                    </div>
                    </a>
                </div>
                )}

            </div>
            {/* end resultsDiv */}

        </div>  
        {/* end masterDiv */}

        </div>
        {/* end App */}

    </div>
    // end parallax

    );
  }
}

export default App;
