import React from 'react';

export default function AboutPage() {
  return (
    <div className='about-container'> 
      <h1 className='name-about'>Kat Zaro</h1>
      <h2>she/her</h2>
      <img className='headshot' src='/headshot.jpeg' />
      <div className='about'>
        <p>I&apos;m a full-stack software engineer who&apos;s passionate about design. My greatest hope is to improve the lived experience of others and to transform the physical & tech spaces around me into spaces that are accessible, efficient, and, of course, easy on the eyes.</p>
      </div>
    </div>
  );
}
