import React from 'react';

export default function HomePage() {
  return (
    <div className="App">
      <div className='home'>
        <h1>Hey, I&apos;m <span className='name'>Kat</span>.</h1>
        <h2>I&apos;m a software developer in Portland, Oregon.</h2>
        <div className='about-p'><p>Full-stack software engineer who&apos;s passionate about design, my greatest hope is to improve the lived experience of others and to transform the physical & tech spaces around me into spaces that are accessible, efficient, and, of course, easy on the eyes.</p></div>
        <h3>Check out some of the <a className='project-link' href='/project'>projects</a> I&apos;ve been working on.</h3>
      </div>
      <footer>
        <div className='line'></div>
        <a href='/connect' className='connect-link'>connect with me.</a>
      </footer>
    </div>
  );
}

