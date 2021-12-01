import React, { Component } from "react";
import Input from './components';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
            <Dropdown/>
            <Input/>
            <button class='submit'>Submit</button>
        </div>
        <div>
            <LogButton/>
        </div>
      </div>
    )
  }
}

class Dropdown extends Component {
  render() {
    return (
      <select class="dropdown">
        <option value="option 1">(Select One)</option>
        <option value="option 2">Housing</option>
        <option value="option 3">Food/Drink/Groceries</option>
        <option value="option 4">Entertainment</option>
        <option value="option 5">Other</option>
      </select>
    )
  }
}

class LogButton extends Component {
  render() {
    return (
        <button class='log' onClick={this.handleClick}>Expense Log</button>
    )
  }
  handleClick() {
    
    fetch('http://localhost:3000/log', {
        method: 'GET'
    })
    .then(console.log('hello'))
    .then(response => response.json())
    .then(data => console.log(data.express))
  }
}

export default App;