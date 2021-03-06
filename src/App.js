import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Main,
  About,
  Board,
  Contact,
  Product,
  Register,
  Login,
  Project,
  Apply,
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/apply" component={Apply} />
      </Switch>
    </Router>
  );
}

export default App;
