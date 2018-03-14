import React from 'react'
import Helmet from 'react-helmet'
// import { config } from 'config'

import '../css/markdown-styles.css'

// Gatsby uses templates now
// to have a template (e.g. for a blog post?)
// you have to use the gatbsy-node.js api
module.exports = React.createClass({
  propTypes() {
    return {
      router: React.PropTypes.object,
    }
  },
  render() {
    // const post = this.props.route.page.data
    const post = {};
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  },
})
