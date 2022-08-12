import React from 'react';

export default function ConnectPage() {
  return (
    <div className='App'>
      <div className='connect-page'>
        <h2>Send me an <a className='email-link' href='mailto: zarokathryn@gmail.com' target='_blank' rel="noreferrer">email</a>.</h2>
        <p>Ask me about how much I love CSS, my degree in Women&apos;s Studies, my experience slinging lattes and americanos in the service industry, my cats, anything you want, really. I&apos;m on the lookout for new opportunities and I&apos;d love to hear from you.</p>
        <h2>Check out my <a className='email-link' href='/katzaro-resume-5.pdf' target='_blank' rel="noreferrer">resume</a>.</h2>
        <h2>And my <a className='email-link' href='https://www.linkedin.com/in/katzaro/' target='_blank' rel="noreferrer">LinkedIn</a>.</h2>
        <h2>Maybe even my <a className='email-link' href='https://github.com/kathrynzaro' target='_blank' rel="noreferrer">GitHub</a>?</h2>
      </div>
      <footer>
        <div className='line'></div>
        <a href='/connect' className='connect-link'>connect with me.</a>
      </footer>
    </div>
  );
}
