import React from 'react';

export default function ProjectPage() {
  return (
    <div className='App'>
      <div className='project-page'>
        <div id='snake-div' className='project-card'>
          <h1>VSSSNAKE</h1>
          <a href='https://github.com/VSssnake/VSssnake' target='_blank' rel="noreferrer">github</a>
          <a href='https://main--gilded-granita-467f3b.netlify.app/' target='_blank' rel="noreferrer">live</a>
          <h2>Built with HTML, CSS, Vanilla JavaScript.</h2>
        </div>
        <div id='printstagram-div' className='project-card'>
          <h1>Printstagram</h1>
          <a href='https://github.com/Printstagram/Printstagram' target='_blank' rel="noreferrer">github</a>
          <a href='https://printstagram.netlify.app/sign-in' target='_blank' rel="noreferrer">live</a>
          <h2>Built with React.</h2>
        </div>
        <div id='handofresources-div' className='project-card'>
          <h1>Hand of Resources</h1>
          <a href='https://github.com/kathrynzaro/hand-of-resources/tree/dev' target='_blank' rel="noreferrer">github</a>
          <a href='https://hand-of-resources-backend.herokuapp.com/' target='_blank' rel="noreferrer">live</a>
          <h2>Built with Node, Express, SQL.</h2>
        </div>
      </div>
      <footer>
        {/* <div className='line'></div> */}
        <a href='/connect'>connect with me.</a>
      </footer>
    </div>
    
  );
}
