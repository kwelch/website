import React from 'react'
import { Container } from 'react-responsive-grid'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h1>Kyle Welch</h1>
              <h2>Senior Software Development Engineer</h2>
            </div>
            <Link to="/blog/">Blog</Link>
          </Container>
        </Headroom >
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div >
    )
  },
})
