import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
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
              <NavLink exact to="/" activeClassName="active">
                <span className="nav-text">Home</span>
                <img src="/home.png" className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                <span className="nav-text">About</span>
                <img src="/about.png" className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" activeClassName="active">
                <span className="nav-text">Projects</span>
                <img src="/projects.png" className="nav-icon" id="project-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/connect" activeClassName="active">
                <span className="nav-text">Connect</span>
                <img src="/connect.png" className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <Link to={{ pathname: 'https://github.com/kathrynzaro' }} target="_blank">
                <span className="nav-text">GitHub</span>
                <img src="/github.png" className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://www.linkedin.com/in/katzaro/' }} target="_blank">
                <span className="nav-text">LinkedIn</span>
                <img src="/linkedin.png" className="nav-icon" />
              </Link>
            </li>
            <li>
              <a href="/katzaro-resume-sept2022.pdf" target="_blank">
                <span className="nav-text">Resume</span>
                <img src="/resume.png" className="nav-icon" />
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
