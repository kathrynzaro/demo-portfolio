import React from 'react';

export default function ProjectPage() {
  return (
    <div className="App">
      <div className="project-page">
        <div id="handofresources-div" className="project-card">
          <div className="content">
            <h1>boo!BOT</h1>
            <a
              href="https://github.com/orgs/boo-BOT-Team/repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="https://boo-bot-server.herokuapp.com/" target="_blank" rel="noreferrer">
              Live
            </a>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=booatthebot.booBOT"
              target="_blank"
              rel="noreferrer"
            >
              Extension
            </a>
            <h3>Node.js, Express, PostgreSQL, CSS, Jest, Heroku.</h3>
            <p>
              boo!BOT, your haunted enCounter, is a VS Code extension that was designed for those
              among us who are perpetually waiting for summer to come to an end and cold misty days
              to return. boo!BOT provides a daily countdown to Halloween - in a pop-up on launch as
              well as in your status bar - along with randomly generated ghoulish facts and
              festively haunting links - fetched from boo!BOT&apos;s very own API - via recurring
              pop-ups in your VS Code window.
            </p>
          </div>
          <div className="video-mask">
            <video width="300" autoPlay loop muted>
              <source src="/booghost.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div id="printstagram-div" className="project-card">
          <div className="content">
            <h1>Printstagram</h1>
            <a href="https://github.com/Printstagram/Printstagram" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://printstagram.netlify.app/sign-in" target="_blank" rel="noreferrer">
              Live
            </a>
            <h3>React, CSS, Supabase, Jest, Netlify.</h3>
            <p>
              A mobile-first Instagram clone powered by the Petfinder API that acts as social media
              for animals that are currently up for adoption.
            </p>
          </div>
          <video width="300" height="300" autoPlay loop muted>
            <source src="/prinsta.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div id="snake-div" className="project-card">
          <div className="content">
            <h1>VSsSnake</h1>
            <a href="https://github.com/VSssnake/VSssnake" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://main--gilded-granita-467f3b.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <h3>HTML, CSS, JavaScript, Supabase, Netlify.</h3>
            <p>
              A fun and nostalgic arcade-style game inspired by Nokia Snake that assists software
              engineering students as they memorize the keyboard shortcuts to navigate VS Code.
            </p>
          </div>
          <img width="300" src="/snake.png"></img>
        </div>
      </div>
      <footer>
        {/* <div className='line'></div> */}
        <a href="/connect">connect with me.</a>
      </footer>
    </div>
  );
}
