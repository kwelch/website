import React from 'react';

export default class BlogRedirect extends React.Component {
  componentWillMount() {
    window.location.href = "https://medium.com/@kwelch/hello-world-30318028821"
  }
  render() {
    return <h1>Redirecting...</h1>;
  }
}