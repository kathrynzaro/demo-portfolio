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
        </div>
      </div>
      <footer>{/* <a href="/connect">Connect</a> */}</footer>
    </div>
  );
}
