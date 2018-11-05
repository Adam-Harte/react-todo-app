import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navigation/Navbar/Navbar';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/completed" Component={null} />
        <Route path="/" Component={null} />
      </Switch>
    )

    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
