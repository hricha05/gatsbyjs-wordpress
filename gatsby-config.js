module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'http://purplegorillaevents.wordpress.com',
        protocol: 'http',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: 'PJGx8fZqaf6wUB8bWV53XcFkydYr7drBGlqfD1cqfNY2rxQBSFk0CdP2zJcvAPuu',
          wpcom_app_clientId: '63881',
          wpcom_user: 'purple.gorilla.events@gmail.com',
          wpcom_password: 'Foam23541'
        }
      }
    }
  ],
}
