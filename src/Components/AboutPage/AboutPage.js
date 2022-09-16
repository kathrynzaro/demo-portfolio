import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="App">
      <div className="about-page">
        <img src="/headshot.jpeg" />
        <div className="about-text">
          <h1>
            Kat Zaro
            <span>she/her</span>
          </h1>
          <p>
            I&apos;m a full-stack software engineer who&apos;s passionate about design. My greatest
            hope is to improve the lived experience of others and to transform the physical & tech
            spaces around me into spaces that are accessible, efficient, and, of course, easy on the
            eyes.
          </p>
        </div>
      </div>
      <footer>
        {/* <div className='line'></div> */}
        <a href="/connect">connect with me.</a>
      </footer>
    </div>
  );
}
