module.exports = {
  siteMetadata: {
    title: 'Baobab Logic and Marula',
    description: 'The corporate site for Baobab Logic and Marula.',
    author: '@rickkln',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Baobab Logic and Marula',
        short_name: 'Baobab',
        start_url: '/',
        background_color: '#202124',
        theme_color: '#202124',
        display: 'browser',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-twitter',
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
