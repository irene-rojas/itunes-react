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

    // what are you trying to call and show?
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://itunes.apple.com/search?term=${this.state.term}&entity=musicTrack&limit=5`)
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
                <li>
                    {this.state.term}
                    {/* {this.state.results}     */}
                </li>
            </ul>
        </div>  

    </div>
    );
  }
}

export default App;
