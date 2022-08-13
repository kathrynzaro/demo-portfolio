import React from 'react';

export default function ProjectPage() {
  return (
    <div className='project-page'>
      <div className='project-container'>
        {/* <h1>Project page coming soon.</h1> */}
        {/* <div className='project'>
          <h2>VSSSNAKE</h2>
          <h3>HTML, CSS3, Vanilla JS.</h3>
          <p>A front-end interactive arcade-style game brimming with nostalgia that was inspired by Nokia Snake. The assists software engineering students as they memorize the keyboard shortcuts to navigate VS Code. Built in a one week sprint by a remote team.</p>
          <a></a>
        </div> */}
        <div className='single-project'>
          <h1 className='snake'>
            VSSSNAKE
            {/* <img src='/nokia.png'></img> */}
          </h1>
          <a className='project-a-tag' href='https://github.com/VSssnake/VSssnake' target='_blank' rel="noreferrer">github</a>
          <a className='project-a-tag' href='https://main--gilded-granita-467f3b.netlify.app/' target='_blank' rel="noreferrer">live</a>
        </div>
        <div className='single-project'>
          <h1 className='printstagram'>
            Printstagram
            
            {/* <img src='/pawprint.png'></img> */}
          </h1>
          <a className='project-a-tag' href='https://github.com/Printstagram/Printstagram' target='_blank' rel="noreferrer">github</a>
          <a className='project-a-tag' href='https://printstagram.netlify.app/sign-in' target='_blank' rel="noreferrer">live</a>
        </div>
        <div className='single-project'>
          <h1 className='hand'>Hand of Resources</h1>
          <a className='project-a-tag' href='https://github.com/kathrynzaro/hand-of-resources/tree/dev' target='_blank' rel="noreferrer">github</a>
          <a className='project-a-tag' href='https://hand-of-resources-backend.herokuapp.com/' target='_blank' rel="noreferrer">live</a>
        </div>
        <footer>
          <div className='line'></div>
          <a href='/connect' className='connect-link'>connect with me.</a>
        </footer>
      </div>
    </div>
    
  );
}
