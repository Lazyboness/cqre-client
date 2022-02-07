import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import BoardPage from './pages/BoardPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/board" component={BoardPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
