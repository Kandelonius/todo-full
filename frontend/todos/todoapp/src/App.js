import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Todos from './components/Todos';
import Account from './components/UserAccount';
import PrivateRoute from "./components/PrivateRoute";
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <nav className = "navbar">
        <Link to = "/">Home</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/todos">Tasks</Link>
        <Link to = "/account">My Account</Link>
      </nav>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/login" component = {LoginForm} />
        <Route path="/todos" component = {Todos} />
        <PrivateRoute exact path="/account" component = {Account} />
      </Switch>
    </div>
  );
}

export default App;
