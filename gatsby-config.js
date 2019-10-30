module.exports = {
  plugins: [
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
