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
    // keep this last
    `gatsby-plugin-netlify`,
  ],
};