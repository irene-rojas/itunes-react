import React, { Component } from 'react';
import './App.css';
import List from "./components/List";

class App extends Component {

    state = {
        term: "",
        items: []
    };

    onChange = (event) => {
        this.setState({
            term: event.target.value
        });
        console.log(this.state.term);
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: "",
            items: [...this.state.items, this.state.term]
        });
    }

  render() {
    return (
      <div className="App">
        iTunes API Tests

        <form className="form" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange}></input>
            <button>Submit</button>
        </form>
        
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
