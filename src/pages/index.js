import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div
    style={{
      maxWidth: 960,
      padding: `1rem .75rem`,
      paddingTop: 0,
    }}
  >
    <h1>Kyle Welch</h1>
    <h2>
      Software Developer at{' '}
      <a href="http://eventbrite.com" target="_blank">
        Eventbrite
      </a>
    </h2>
    <ul>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/react-codeworking">React CodeWorking</Link>
      </li>
      <li>
        <a href="http://slides.krwelch.com/#/" target="_blank">
          Slides
        </a>
      </li>
      <li>
        <a href="https://medium.com/@kwelch" target="_blank">
          Blog
        </a>
      </li>
    </ul>
    <p>Site made with gatsby</p>
  </div>
);
