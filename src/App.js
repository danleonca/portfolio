import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import bosqueInv from "./images/bosqueInv.jpg";
import fatverine from "./images/fatverine.png";
import gitHub from "./images/gitHub.png";
import linkedIn from "./images/linkedIn.png";
import InfoBar from "./components/InfoBar/InfoBar";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    const M = window.M;
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
  });
  return (
    <div>
      <Router>
        <InfoBar picture={fatverine} gitHub={gitHub} linkedIn={linkedIn} />
        <Switch>
          <Route path="/about">
            <About />
            <Contact gitHub={gitHub} linkedIn={linkedIn} />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <MainPage bosque={bosqueInv} />
            <NavBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
