import React from "react"
import Link from 'gatsby-link'

export default () => (
<div>
  <div
    style={{
      background: 'lightgray',
    }}
  >
    <div
      style={{
        maxWidth: 960,
        paddingTop: 0,
        padding: `1rem .75rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h1>Kyle Welch</h1>
        <h2>Senior Software Development Engineer</h2>
      </div>
      <Link to="/blog/">Blog</Link>
    </div>
  </div >
  <div
    style={{
      maxWidth: 960,
      padding: `1rem .75rem`,
      paddingTop: 0,
    }}
  >
      Hello world!
    </div>
  </div >
);
      
