import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        term: "",
        results: []
    };

    componentDidMount() {
        axios.get(`https://itunes.apple.com/search?term=${this.state.term}`)
        .then(res => {
            const itunes = res.data;
            this.setState({ 
                results: itunes
             });
        });
    }

    onChange = (event) => {
        this.setState({
            term: event.target.value.replace(/ /g,"+")
        });
        console.log(this.state.term);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            results: this.state.results
        });
        console.log(this.state.results);
    }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Search!</button>
        </form>    

        <div>
            {this.state.results}    
        </div>  
    </div>
    );
  }
}

export default App;
