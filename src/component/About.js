import React from 'react';

function About(){
  return (<div className="div">
    <h1 className="title">
      ReactJS | Router
    </h1>
    <h2 className="about">
      React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
    </h2>
    Read more at: 
    <a href="https://v5.reactrouter.com/web/guides/quick-start" className="url"> React Router V5 - Quick Start</a>
  </div>);
}

export default About;