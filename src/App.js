import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        term: "",
        results: []
        // empty array awaiting results
    };

    // text field
    onChange = (event) => {
        this.setState({
            term: event.target.value.replace(/ /g,"+"),  
        });
        console.log(this.state.term);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://itunes.apple.com/search?term=${this.state.term}&entity=musicTrack&limit=10`)
        .then(res => {
            this.setState({ 
                results: res.data.results
             });
             console.log(this.state.results);
        });
    }


  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
            Songs by:<input value={this.state.term} onChange={this.onChange} />
            <button>Search!</button>
        </form>    

        <div>
            <ul>
                Term: {this.state.term}
                <br></br>
                <br></br>
                {this.state.results.map(result => 
                <div key={result.trackId}>
                    Song: {result.trackName}
                        <br></br>
                    <img src={result.artworkUrl100} alt="album art"/>
                        <br></br>
                    Album: {result.collectionName}
                        <hr></hr>
                </div>)}
            </ul>
        </div>  

    </div>
    );
  }
}

export default App;
