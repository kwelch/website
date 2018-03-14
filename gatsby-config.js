module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdownPages/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
