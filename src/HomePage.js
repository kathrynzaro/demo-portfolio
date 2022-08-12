import React from 'react';

export default function HomePage() {
  return (
    <div className="App">
      <div className='home'>
        <h1>Hey, I&apos;m <span className='name'>Kat</span>.</h1>
        <h2>I&apos;m a software engineer in Portland, Oregon.</h2>
        <h3>Check out some of the <a className='project-link' href='/project'>projects</a> I&apos;ve been working on.</h3>
      </div>
      <footer>&copy; 2021 Kat Zaro.</footer>
    </div>
  );
}

