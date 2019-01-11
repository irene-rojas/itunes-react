import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        term: "",
        results: [],
        // empty array awaiting results
        gridSpace: 0
    };

    // text field
    onChange = (event) => {
        this.setState({
            term: event.target.value.replace(/ /g,"+"),  
        });
        console.log(this.state.term);
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://itunes.apple.com/search?term=${this.state.term}&entity=musicTrack&limit=10`)
        .then(res => {
            this.setState({ 
                results: res.data.results,
                gridSpace: this.state.gridSpace + 1
             });
             console.log(this.state.results);
        });
    }


  render() {
    return (
      <div className="App">

        <form onSubmit={this.onSubmit}>
            Songs by:<input value={this.state.term} onChange={this.onChange} />
            <button>Search!</button>
        </form>    

        <div>
            Term: {this.state.term}
            <br></br>
            <br></br>

            <div className="resultsDiv">
                {this.state.results.map((result, index) => 

                <div className={`card grid${index}`} key={result.trackId}>
                    <div>
                        <img src={result.artworkUrl100} alt="album art"/>
                        <br></br>
                        Song: {result.trackName}
                            <br></br>
                        Album: {result.collectionName}
                    </div>
                </div>
                
                )}
            </div>
        </div>  

    </div>
    );
  }
}

export default App;
