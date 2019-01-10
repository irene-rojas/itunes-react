import React, { Component } from 'react';
import './App.css';
// import List from "./components/List";

class App extends Component {

    state = {
        pictures: []
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=2')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        <img src={pic.picture.medium} 
                        alt="person"/>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
    }


  render() {
    return (
      <div className="App">
        Random User Tests
        <div className="randomUserDiv">
            {this.state.pictures}
        </div>
        

      </div>
    );
  }
}

export default App;
