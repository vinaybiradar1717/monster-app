import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Vinay'
        },
        {
          name: 'Akash'
        },
        {
          name: 'Vikas'
        }
      ]
    }
  }
  render(){
    return(
      <div className="App">
        {this.state.monsters.map(monster => 
          <h1>{monster.name}</h1>
          )}
      </div>
    )
  }
}


export default App;
