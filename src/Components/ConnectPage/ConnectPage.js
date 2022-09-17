import React from 'react';
import './ConnectPage.css';

export default function ConnectPage() {
  return (
    <div className="App">
      <div className="connect-page">
        <h1>Let&apos;s connect!</h1>

        <div className="connect-page-paragraph-wrapper">
          <p>
            Ask me about how much I love CSS, my degree in Women&apos;s Studies, my experience
            slinging lattes and americanos in the service industry, my cats, anything you want,
            really. I&apos;m on the lookout for new opportunities and I&apos;d love to hear from
            you.
          </p>
        </div>
        <div className="link-wrapper">
          <h2>
            Send me an
            <a href="mailto: zarokathryn@gmail.com" target="_blank" rel="noreferrer">
              {' '}
              email
            </a>
            .
          </h2>
          <h2>
            Check out my
            <a href="/katzaro-resume-sept22.pdf" target="_blank" rel="noreferrer">
              {' '}
              resume
            </a>
            .
          </h2>
          <h2>
            And my
            <a href="https://www.linkedin.com/in/katzaro/" target="_blank" rel="noreferrer">
              {' '}
              LinkedIn
            </a>
            .
          </h2>
          <h2>
            Maybe even my
            <a href="https://github.com/kathrynzaro" target="_blank" rel="noreferrer">
              {' '}
              GitHub
            </a>
            ?
          </h2>
          <p>(if you&apos;re feeling curious.)</p>
        </div>
      </div>
      <footer>
        {/* <div className='line'></div> */}
        <a href="/connect" className="connect-link">
          connect with me.
        </a>
      </footer>
    </div>
  );
}
