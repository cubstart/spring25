import './App.css';
import React from 'react';
import spinningGear from './spinning-gear.gif';
import resumeIcon from './resume-icon.png';
import emailIcon from './email-icon.png'
import linkedinIcon from './linkedin-icon.png';
import githubIcon from './github-icon.png';
import goodreadsIcon from './goodreads-icon.png'

function App() {
  return (
    <div className="App">
      <div className="content-frame skinny-box">
        <img src={spinningGear} alt="Spinning Gear" className="gear"/>
        <h1 className="typing-text">I am Adrian Bao.</h1>
        <p><em><b>Software Engineer, Abstract Architect, and Pragmatic Thinker</b></em></p>

        <div className="bio-text">
        <p>I am studying Computer Science at UC Berkeley, graduating Spring 2025. 
        My areas of concentration are with distributed systems and embedded programming. 
        </p>

        <p>I'm a problem writer for the <a href="https://calico.cs.berkeley.edu/">California 
        Informatics Competition</a>, a programming competition for high school students and
        up!</p>

        <p>
        Recently, I taught <a href="https://decal.ocf.berkeley.edu/">Introduction to System Administration </a>  
        at UC Berkeley. This past summer, I interned at Amazon Web Services developing data center 
        optimization tools used on a global scale.
        </p>

        <p>On my off time, I enjoy composing classical music, hiking around the Bay Area, 
        and reading!</p>
        </div>

        <div className="social-links">
          <a href="/Adrian_Bao_Resume.pdf">
            <img src={resumeIcon} alt="Resume" className="social-icon"/>
          </a>
          <a href="mailto:adrianbao@berkeley.edu">
            <img src={emailIcon} alt="Email" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/theadrianbao/">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/theadrianbao">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.goodreads.com/user/show/187729281">
            <img src={goodreadsIcon} alt="Goodreads" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

document.title = "Adrian Bao"

export default App;