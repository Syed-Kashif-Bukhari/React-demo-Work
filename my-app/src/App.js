import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;




class Salam extends React.Component {
  render() {
    return(
      <div>
      <h1 id="heading">YA NaBi Mustafa MarHaba</h1>
      <br />
       
       <input type="number" placeholder="Phone No ...."/> <br />
       <input type="text/Email" placeholder="type Your Email Address ...."/>
       <br />
       
       <button>Submit </button>
      
      
      
      </div>
    )
  }
}

export default Salam;
