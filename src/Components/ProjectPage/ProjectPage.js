import React from 'react';
import './ProjectPage.css';

export default function ProjectPage() {
  return (
    <div className="App">
      <div className="project-page">
        <div className="project-card" id="boobot">
          <div className="content">
            <h1>boo!BOT</h1>
            <a
              href="https://github.com/orgs/boo-BOT-Team/repositories"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              GitHub
            </a>
            <a
              href="https://boo-bot-server.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              Live
            </a>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=booatthebot.booBOT"
              target="_blank"
              rel="noreferrer"
              className="project-links"
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
            <video className="boobot-vid" autoPlay loop muted>
              <source src="/booghost.mp4" type="video/mp4"></source>
            </video>
          </div>
          <a href="#printstagram">
            <img className="arrow" src="/arrowdown.png" />
          </a>
        </div>
        <div className="project-card" id="printstagram">
          <div className="content">
            <h1>Printstagram</h1>
            <a
              href="https://github.com/Printstagram/Printstagram"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              GitHub
            </a>
            <a
              href="https://printstagram.netlify.app/sign-in"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              Live
            </a>
            <h3>React, CSS, Supabase, Jest, Netlify.</h3>
            <p>
              A mobile-first Instagram clone powered by the Petfinder API that acts as social media
              for animals that are currently up for adoption.
            </p>
          </div>
          <div className="video-mask">
            <video className="printstagram-vid" autoPlay loop muted>
              <source src="/prinsta.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="arrows">
            <a href="#boobot">
              <img className="arrow" src="/arrowup.png" />
            </a>
            <a href="#vsssnake">
              <img className="arrow" src="/arrowdown.png" />
            </a>
          </div>
        </div>
        <div className="project-card" id="vsssnake">
          <div className="content">
            <h1>VSsSnake</h1>
            <a
              href="https://github.com/VSssnake/VSssnake"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              GitHub
            </a>
            <a
              href="https://main--gilded-granita-467f3b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              Live
            </a>
            <h3>HTML, CSS, JavaScript, Supabase, Netlify.</h3>
            <p>
              A fun and nostalgic arcade-style game inspired by Nokia Snake that assists software
              engineering students as they memorize the keyboard shortcuts to navigate VS Code.
            </p>
          </div>

          <img src="/snake.png"></img>
          <a href="#printstagram">
            <img className="arrow" src="/arrowup.png" />
          </a>
        </div>
      </div>
      <footer>{/* <a href="/connect">Connect</a> */}</footer>
    </div>
  );
}
