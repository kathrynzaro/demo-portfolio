import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="App">
      <div className="about-page">
        <div className="about-content">
          <div className="about-text">
            <h1>
              Kat Zaro
              <span id="pronouns">she/her</span>
            </h1>
            <p>
              I&apos;m a full-stack software engineer who&apos;s passionate about design, human
              beings, and making cool things with code. <br></br>
              <br></br> Drawing from a background in Women&apos;s Studies and the specialty coffee
              industry, my greatest hope is to improve the lived experience of others and to
              transform the physical & tech spaces around me into spaces that are{' '}
              <em>accessible</em>, <em>efficient</em>, and, of course, <em>easy on the eyes</em>.
            </p>
          </div>
          <img src="/headshot.jpeg" />
          {/* <table>
            <thead>
              <tr>
                <th>Languages</th>
                <th>
                  Libraries & <br></br> Frameworks
                </th>
                <th>Dev Tools</th>
              </tr>
            </thead>
            <tr>
              <td>HTML</td>
              <td>React</td>
              <td>Git/GitHub</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Node</td>
              <td>Beekeeper</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Express</td>
              <td>Netlify</td>
            </tr>
            <tr>
              <td>SQL</td>
              <td>MUI</td>
              <td>Heroku</td>
            </tr>
            <tr>
              <td></td>
              <td>NPM</td>
              <td>VS Code</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Postman</td>
            </tr>
            <thead>
              <th>Skills</th>
              <th>Testing</th>
              <th>Databases</th>
            </thead>
            <tr>
              <td>TDD</td>
              <td>QUnit</td>
              <td>Supabase</td>
            </tr>
            <tr>
              <td>
                Pair & Mob <br></br> Programming
              </td>
              <td>Jest</td>
              <td>PostgreSQL</td>
            </tr>
            <tr>
              <td>
                Agile <br></br> Methodology
              </td>
              <td>Supertest</td>
              <td></td>
            </tr>
            <tr>
              <td>
                Remote <br></br> Collaboration
              </td>
              <td></td>
              <td></td>
            </tr>
          </table> */}
        </div>
      </div>
    </div>
  );
}
