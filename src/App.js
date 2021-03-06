import React, {Component} from 'react';
import CardList from './components/CardList/CardList.js';
import SearchBox from './components/SearchBox/SearchBox.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    this.SearchHandler = this.SearchHandler.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  SearchHandler(e){
    this.setState({searchField: e.target.value})
  }

  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())    
      )


    return(
      <div className="App">
       <h1>Monster App</h1>
       <SearchBox placeholder="placeholder" SearchHandler={this.SearchHandler} />
       <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}


export default App;
