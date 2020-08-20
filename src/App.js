import React from 'react';
import './App.css';
import Todo from './pages/Todo'
import CRAHome from './components/CRAHome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react">React Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/react">
            <CRAHome />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>

    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
