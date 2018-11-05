import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navigation/Navbar/Navbar';
import Tasks from './Components/Tasks/Tasks';

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
        <Tasks tasksList={[{id: 1, title: 'first', description: 'desc 1'}, {id: 2, title: 'second', description: 'desc 2'}]} />
        {routes}
      </div>
    );
  }
}

export default App;
