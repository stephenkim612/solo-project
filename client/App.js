// import React, { Component } from "react";
// import { Input, LogButton, Dropdown, Submit } from './components';


// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <div>
//             <Dropdown/>
//             <Input/>
//             <Submit />
//         </div>
//         <div>
//             <LogButton/>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

import React, { Component, Fragment } from "react";
import { Input, LogButton, Dropdown, Submit, Home, Totals, Analyze, Login, Signup } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path ='/signup' element={<Signup/>}/>
            <Route exact path='/Home' element={<Home/>}/>
            <Route path='/totals' element={<Totals/>}/>
            <Route path='/analyze' element={<Analyze/>}/>
          </Routes>
        </Router>
        
      </div>
    )
  }
}

export default App;