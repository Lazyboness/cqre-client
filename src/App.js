import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/apply" component={ApplyPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/project" component={ProjectPage} />
        </Switch>
      </Router>
    </>
  );
}
