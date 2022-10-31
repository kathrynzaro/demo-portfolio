import React from 'react';
import './ProjectPage.css';

export default function ProjectPage() {
  return (
    <div className="App">
      <div className="project-page">
        <div className="project-card" id="stellarview">
          <div className="content">
            <h1>stellarView</h1>
            <a
              href="https://github.com/stellarview"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              GitHub
            </a>
            <a
              href="https://stellarview.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-links"
            >
              Live
            </a>

            <h3>React, Node.js, Express, PostgreSQL, Jest.</h3>
            <p>
              Earthlings, may I introduce stellarView, a full-stack space-themed quiz app
              that&apos;s on a mission to assist software engineers as they build confidence for
              their next technical interview by providing 100+ questions across seven categories
              drawn from stellarView&apos;s RESTful API server. It&apos;s a lot like flashcards,
              only it&apos;s more fun and it has more aliens and even a little space confetti.
            </p>
          </div>
          <div className="media">
            <div className="video-mask">
              <video className="stellarview-vid" playsinline autoPlay loop muted>
                <source src="/stellarview.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div className="arrows">
              <a href="#top">
                <img className="arrow" src="/arrowup.png" />
              </a>
              <a href="#boobot">
                <img className="arrow" src="/arrowdown.png" />
              </a>
            </div>
          </div>
        </div>

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
            <h3>Node.js, Express, PostgreSQL, Jest.</h3>
            <p>
              boo!BOT, your haunted enCounter, is a VS Code extension that was designed for those
              among us who are perpetually waiting for summer to come to an end and cold misty days
              to return. boo!BOT provides a daily countdown to Halloween - in a pop-up on launch as
              well as in your status bar - along with randomly generated ghoulish facts and
              festively haunting links - fetched from boo!BOT&apos;s very own API - via recurring
              pop-ups in your VS Code window.
            </p>
          </div>
          <div className="media">
            <div className="video-mask">
              <video className="boobot-vid" playsinline autoPlay loop muted>
                <source src="/booghost.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div className="arrows">
              <a href="#stellarview">
                <img className="arrow" src="/arrowup.png" />
              </a>
              <a href="#printstagram">
                <img className="arrow" src="/arrowdown.png" />
              </a>
            </div>
          </div>
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
            <h3>React, Supabase, Jest.</h3>
            <p>
              A mobile-first Instagram clone powered by the Petfinder API that acts as social media
              for animals that are currently up for adoption.
            </p>
          </div>
          <div className="media">
            <div className="video-mask">
              <video className="printstagram-vid" playsinline autoPlay loop muted>
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
            <h3>HTML, CSS, JavaScript, Supabase.</h3>
            <p>
              A fun and nostalgic arcade-style game inspired by Nokia Snake that assists software
              engineering students as they memorize the keyboard shortcuts to navigate VS Code.
            </p>
          </div>

          <div className="media">
            <div className="video-mask">
              <video className="vsssnake-vid" playsinline autoPlay loop muted>
                <source src="/vsssnake.mp4" type="video/mp4"></source>
              </video>
            </div>
            <div className="arrows">
              <a href="#printstagram">
                <img className="arrow" src="/arrowup.png" />
              </a>
              <a href="#top">
                <img id="top-arrow" className="arrow" src="/toparrow.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
