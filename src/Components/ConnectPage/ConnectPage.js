import React from 'react';
import './ConnectPage.css';

export default function ConnectPage() {
  return (
    <div className="App">
      <div className="connect-page">
        <section className="left-section">
          <h1>Let&apos;s connect!</h1>
          <p>
            Ask me about how much I love CSS, my degree in Women&apos;s Studies, my experience
            slinging lattes and americanos in the service industry, my cats, anything you want,
            really. I&apos;m on the lookout for new opportunities and I&apos;d love to hear from
            you.
          </p>
        </section>
        <section className="right-section">
          <ul>
            <li>
              Send me an
              <a href="mailto: zarokathryn@gmail.com" target="_blank" rel="noreferrer">
                {' '}
                email
              </a>
            </li>
            <li>
              Check out my
              <a href="/katzaro-resume-sept22.pdf" target="_blank" rel="noreferrer">
                {' '}
                resume
              </a>
            </li>
            <li>
              And my
              <a href="https://www.linkedin.com/in/katzaro/" target="_blank" rel="noreferrer">
                {' '}
                LinkedIn
              </a>
            </li>
            <li>
              Hey, maybe even my
              <a href="https://github.com/kathrynzaro" target="_blank" rel="noreferrer">
                {' '}
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
