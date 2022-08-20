import React from 'react';

export default function HomePage() {
  return (
    <div className="App">
      <div className='homepage'>
        <h1>Hey, I&apos;m
          <span> Kat</span>.
        </h1>
        <h2>I&apos;m a software developer in Portland, Oregon.</h2>
        <h3>Check out some of the
          <a href='/project'> projects </a>
          I&apos;ve been working on.
        </h3>
      </div>
      <footer>
        {/* <div className='line'></div> */}
        <a href='/connect'>connect with me.</a>
      </footer>
    </div>
  );
}

