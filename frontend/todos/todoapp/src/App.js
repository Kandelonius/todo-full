import './App.css';
import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className = "navbar">
        <Link to = "/">Home</Link>
        <Link to = "/login">Login</Link> 
      </nav>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/login" component = {Login} />
      </Switch>
    </div>
  );
}

export default App;
