import React from 'react';
import { graphql } from 'gatsby'; 

export default function IndexPage({ data }) {
  const { resume } = data;
  return (
    <div dangerouslySetInnerHTML={{ __html: resume.html }} />
  );
}
 
export const pageQuery = graphql`
  query IndexQuery {
    resume:markdownRemark(fileAbsolutePath:{regex:"/content/resume/"}) {
      html
    }
  }
`;