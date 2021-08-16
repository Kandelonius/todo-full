import './App.css';
import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Todos from './components/Todos';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  const Login = details => {
    console.log(details);
  }
  return (
    <div className="app">
      <nav className = "navbar">
        <Link to = "/">Home</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/todos">Tasks</Link>
      </nav>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/login" component = {Login} />
        <Route path = "/todos" component = {Todos} />
      </Switch>
    </div>
  );
}

export default App;
