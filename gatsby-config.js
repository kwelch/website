module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-21905371-1',
      },
    },
    // keep this last
    `gatsby-plugin-netlify`,
  ],
};
