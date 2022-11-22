import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="App">
      <div className="homepage">
        <section className="home-content">
          <h1>
            Hey, I&apos;m <span id="kat">Kat</span>.
          </h1>
          <h2>
            I&apos;m a software engineer in <span id="portland">Portland, OR</span>.
          </h2>
          <h3>
            Check out some of the
            <a href="/project"> projects </a>
            I&apos;ve been working on.
          </h3>
        </section>
      </div>
    </div>
  );
}
