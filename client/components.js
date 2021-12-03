import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleLogin = () => {
    console.log('hello')
  }
  handleUsername = (e) => {
    this.setState({username: e.target.value})
    console.log(this.state)
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value})
    console.log(this.state)
  }

  render() {
    return (
    <>
      <div>
        <h1>Hello!</h1>
        <input className='username' placeholder='Username' onChange={this.handleUsername}></input>
        <input className='password' placeholder='Password' onChange={this.handlePassword}></input>
      </div>
      <div className='loginOrSignUp'>
      <Link to='/home'>
        <button className='login' onClick={this.handleLogin}>Login</button>
      </Link>
      </div>
      <div>
      <Link to='/signup'>
        <button className='signup'>Create Account</button>
      </Link>
      </div>
    </>
    )
  }
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFirstName = (e) => {
    this.setState({firstName: e.target.value})
  }
  handleLastName = (e) => {
    this.setState({lastName: e.target.value})
  }
  handleUserName = (e) => {
    this.setState({username: e.target.value})
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value})
    console.log(this.state)
  }
  handleCreate = () => {
    fetch("http://localhost:3000/create",
      {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)}
    )
    .then(response => response.json())
    .then(response => console.log('Success', response))
    // .then(() => <Redirect to='/log/>')
    // .then(() => window.location.reload())
    // .then(() => <Redirect to='/Home'/>)
    .catch((err) => {console.log('error')})
  }
  render() {
    return (
      <>
        <div>
          <h1>start tracking</h1> 
          <input className='newFirstName' placeholder='First Name' onChange={this.handleFirstName}></input>
          <input className='newLastName' placeholder='Last Name' onChange={this.handleLastName}></input>
        </div>
        <div>
          <input className='newUsername' placeholder='Username' onChange={this.handleUserName}></input>
          <input className='newPassword' placeholder='Password' onChange={this.handlePassword}></input>
        </div>
        <div>
          <Link to='/Home'>
            <button className='createAccount' onClick={this.handleCreate}>Create!</button>
          </Link>
        </div>
      </>
    )
  }
}



class Input extends Component {
    render() {
        return (
            <input type='number' placeholder='Enter Amount' onChange={this.props.onChangeInput}></input>
        )
    }
}

class LogButton extends Component {
    render() {
      return (
        <Link to='/totals'>
          <button class='log' onClick={this.props.output}>Expense Log</button>
        </Link>
      )
    }
    // handleClick() {
    //   fetch('http://localhost:3000/log')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    // }
}

class Dropdown extends Component {
    render() {
      return (
        // <select class="dropdown">
        <select class="dropdown" onChange={this.props.onChangeCat}>
          <option value="Void">(Select One)</option>
          <option value="Housing">Housing</option>
          <option value="Food/Drink/Groceries">Food/Drink/Groceries</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      )
    }

}

class Submit extends Component {
  handleClick = () => {
    const data = this.props.newEntry;
    fetch("http://localhost:3000/new",
      {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}
    )
    .then(response => response.json())
    .then(response => console.log('Success', response))
    // .then(() => window.location.reload())
    .catch((err) => {console.log('error')})  
  }
    render() {
      return (
        <button
          class='submit'
          onClick={this.handleClick}
        >Submit</button>
      )
    }
}

class Name extends Component {
  render() {
    return (
      <input type="text" placeholder = 'Enter Name' onChange={this.props.onChangeName}></input>
    )
  }
}


class Home extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      category: '',
      amount: '',
      result: ''
    }
  }
  // handleData = (data) => {
  //   this.setState({result: data})
  // }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
    // console.log(this.state.name)
  }
  handleChangeCat = (event) => {
    this.setState({category: event.target.value});
  }
  handleChangeInput = (event) => {
    this.setState({amount: event.target.value});
  }
  // storeData = (val) => {
  //   this.setState({data: val})
  // }
  // handleClick = () => {
  //   // const getResult = () => console.log(this.state)
  //   fetch('http://localhost:3000/log')
  //   .then(response => response.json())
  //   .then(data => {console.log(data); this.setState({result: data})})
  //   // .then(console.log(this.state))
  // }


  render() {
    console.log(this.state)
    return (
      <>
        <h1>what'd you buy this time...</h1>
        <div>
          <Dropdown
            onChangeCat={this.handleChangeCat}
          />
          <Name
            // name={this.state.name}
            onChangeName={this.handleChangeName}
          />
          <Input
            onChangeInput={this.handleChangeInput}
          />
          <Submit
            newEntry = {this.state}
          />
        </div>
          <LogButton
            output={this.handleData}
          />
      </>
    )
  }
}

class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/log')
    .then(response => response.json())
    .then(data => {console.log('this', data); this.setState({result: data})})
    .catch('error')
  }
  handleDelete = (e) => {
    const item = e.target.value;
    console.log(item);
    fetch('http://localhost:3000/delete', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: item})})
      // .then(console.log(item))
      .then(response => response.json())
      .then(data => console.log(data))
      // .then(() => this.setState());
  }
  handleUpdate = (e) => {
    const item = e.target.value;
    console.log(item)
  }
  render() {
    console.log('render', this.state)
    const log = this.state.result;
    console.log('log', log)
    // if (log) {
    // const array = [];
    // for (let obj of log) {
    //   array.push(new <DataRow/>)
    // }
    // console.log(array)
    // }
    return (
      <>
      <h1>what have you done...</h1>
      <div>
        <Link to='/analyze'>
          <button className='analyze'>Analyze</button>
        </Link>
      </div>
      {/* <div>
        <h1 className='totals'>Name</h1>
        <h1 className='totals'>Amount</h1>
        <h1 className='totals'>Category</h1>
      </div> */}
      {this.state.result.map((entry) => (
        <DataRow
          remove={this.handleDelete}
          update={this.handleUpdate}
          name={entry.name}
          amount={`$${entry.amount}`}
          category={entry.category}
          id={entry.id}
        />
      ))}
      </>
    )
  }
}

// class DataRow extends Component {
//   render() {
//     return (
//       <div>
//         <h3>hello</h3>
//         <h3>hello</h3>
//         <h3>hello</h3>
//       </div>
//     )
//   }
// }

const DataRow = ({name, amount, category, id, remove, update}) => (
  // <div>
  //   <h3>{name}</h3>
  //   <h3>{amount}</h3>
  //   <h3>{category}</h3>
  // </div>
  <>
  <ul>
    <li>{name}</li>
    <li>{amount}</li>
    <li>{category}</li>
    <div>
      <button className='update' value={id} onClick={update}>Edit</button>
      <button className='delete' value={id} onClick={remove}>Delete</button>      
    </div>
    
  </ul>
  {/* <button onClick={console.log('hello')}>Delete</button> */}
  </>
)

class Analyze extends Component {
  render() {
    return (
      <>
      {/* <h1>look at this shit...</h1> */}
      <img className='img' src="https://www.memecreator.org/static/images/memes/5329310.jpg"></img>
      </>
    )
  }
}



export {Input, LogButton, Dropdown, Submit, Home, Totals, Analyze, Login, Signup};