import React, { Component } from 'react';
import './App.css';
// import List from "./components/List";

class App extends Component {

    state = {
        term: "",
        results: ""
    };

    onChange = (event) => {
        this.setState({ term: event.target.value });
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://itunes.apple.com/search?term=${this.state.term}`;
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({ 
              term:'', 
              results: data.data[0].images.fixed_height.url }))
          .catch(e => console.log('error', e));
      }

  render() {
    return (
      <div className="App">
        iTunes API Tests

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <img src={this.state.img} height="200" alt={this.state.term} />
        
      </div>
    );
  }
}

export default App;
