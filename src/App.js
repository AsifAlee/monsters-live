
import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/cardlist.component';

import SearchBox from './components/search-box/search-box.component';
class App extends React.Component {


  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };


  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

 

  render() {
    const { monsters, searchField } = this.state;
    console.log("state is:", this.state);
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={'Search monsters'}
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        console.log("the json is:", users);
        this.setState({ monsters: users })
        console.log("the update state is:");
      })
  }

}
export default App;

