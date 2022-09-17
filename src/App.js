import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import ProjectPage from './Components/ProjectPage/ProjectPage';
import ConnectPage from './Components/ConnectPage/ConnectPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="/home.png" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="/about.png" />
              </Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://github.com/kathrynzaro' }} target="_blank">
                <img src="/github.png" />
              </Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://www.linkedin.com/in/katzaro/' }} target="_blank">
                <img src="/linkedin.png" />
              </Link>
            </li>
            <li>
              <a href="/katzaro-resume-sept22.pdf" target="_blank">
                <img src="/resume.png" />
              </a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/project">
            <ProjectPage />
          </Route>
          <Route exact path="/connect">
            <ConnectPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
