require('dotenv').config({
  path: '.env',
});


module.exports = {
  siteMetadata: {
    title: 'Purple Gorilla Events',
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
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'localhost/purplegorilla2018',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: '1wzBNnsE4japgsHqXfZYFlf8yRpUoBfnHRw8jYwxraWjoWw45fDF8XCrcFnjETjT',
          wpcom_app_clientId: '63888',
          wpcom_user: 'purple.gorilla.events@gmail.com',
          wpcom_password: 'Foam23541'
        },
         includedRoutes: [
           "/*/*/posts",
           "/*/*/pages", 
           "/*/*/categories",
           "/*/*/tags",
           "/*/*/media",
           "/*/*/taxonomies",
           "/*/*/authors",
         ],
         exludedRoutes: [
            "/*/*/users",
         ],
         verboseOutput: true,
      }
    }
  ],
}