import React from 'react';
import Helmet from 'react-helmet'

export default () => {
  return (<h1>
    Redirecting...
    <Helmet meta={[
      {"http-equiv": "refresh", "content": "0; url=https://medium.com/@kwelch/hello-world-30318028821"},
    ]} />
  </h1>);
};