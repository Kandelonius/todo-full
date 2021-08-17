import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Todos from './components/Todos';
import PrivateRoute from "./components/PrivateRoute";
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <nav className = "navbar">
        <Link to = "/">Home</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/todos">Tasks</Link>
      </nav>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/login" component = {LoginForm} />
        <PrivateRoute exact path="/todos" component = {Todos} />
      </Switch>
    </div>
  );
}

export default App;
