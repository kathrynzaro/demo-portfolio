import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://github.com/kathrynzaro' }} target="_blank">GitHub</Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://www.linkedin.com/in/katzaro/' }} target="_blank">LinkedIn</Link>
            </li>
            <li>
              <a href='/katzaro-resume-5.pdf' target="_blank">Resume</a>
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
        </Switch>
      </div>
    </Router>
  );
}
