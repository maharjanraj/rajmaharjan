import React from "react";

import "./home.scss";

function Home(props) {
  return (
    <div className="home_page">
      <div className="personal">
        <div className="picture">
          <img src={"raj.jpeg"} alt="raj" />
        </div>
        <div className="info">
          <p className="name">Raj Krishna Maharjan</p>
          <p className="title">
            <span>Senior Software Engineer</span> at CODING MOUNTAIN
          </p>
        </div>
      </div>
      <div className="links">
        <p>
          <a
            href="https://github.com/maharjanraj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/github.svg" alt="Github" />
            <span>Github</span>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/rajmaharjan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/linkedin.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </p>
        <p>
          <a
            href="https://medium.com/@raj_maharjan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/medium.svg" alt="Medium" />
            <span>Medium</span>
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/esportsraj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/twitter.svg" alt="Twitter" />
            <span>Twitter</span>
          </a>
        </p>
        <p>
          <a
            href="https://dev.to/rajmaharjan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/social/devto.svg" alt="Dev.to" />
            <span>Dev.to</span>
          </a>
        </p>
      </div>
    </div>
  );
}

Home.propTypes = {};
export default Home;
