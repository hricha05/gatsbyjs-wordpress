const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /post/{slug})
exports.createPages = ({
    graphql,
    actions,
}) => {
    const {
        createPage,
    } = actions;
    return new Promise((resolve, reject) => {
        // The “graphql” function allows us to run arbitrary
        // queries against the local Wordpress graphql schema. Think of
        // it like the site has a built-in database constructed
        // from the fetched data that you can run queries against.

        // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
        graphql(
            `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    format
                  }
                }
              }
            }
          `,
        ).then((result) => {
            if (result.errors) {
                console.log(result.errors);
                reject(result.errors);
            }
            const postTemplate = path.resolve('./src/templates/posts.js');
            // We want to create a detailed page for each
            // post node. We'll just use the Wordpress Slug for the slug.
            // The Post ID is prefixed with 'POST_'
            _.each(result.data.allWordpressPost.edges, (edge) => {
                createPage({
                    path: `/blog/${edge.node.slug}`,
                    component: slash(postTemplate),
                    context: {
                        id: edge.node.id,
                    },
                });
            });
            resolve();
        });
        // ==== END POSTS ====
    });
};


// const _ = require('lodash')
// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
// const { paginate } = require('gatsby-awesome-pagination')

// const getOnlyPublished = edges => _.filter(edges, ({ node }) => node.status === 'publish')

// exports.createPages = ({ actions, graphql }) => {
//     const { createPage } = actions

//     return graphql(`
//     {
//       allWordpressPage {
//         edges {
//           node {
//             id
//             slug
//             status
//           }
//         }
//       }
//     }
//   `)
//         .then(result => {
//             if (result.errors) {
//                 result.errors.forEach(e => console.error(e.toString()))
//                 return Promise.reject(result.errors)
//             }

//             const pageTemplate = path.resolve(`./src/templates/page.js`)

//             // Only publish pages with a `status === 'publish'` in production. This
//             // excludes drafts, future posts, etc. They will appear in development,
//             // but not in a production build.

//             const allPages = result.data.allWordpressPage.edges
//             const pages =
//                 process.env.NODE_ENV === 'production' ?
//                 getOnlyPublished(allPages) :
//                 allPages

//             // Call `createPage()` once per WordPress page
//             _.each(pages, ({ node: page }) => {
//                 createPage({
//                     // will be the url for the page
//                     path: `/${page.slug}/`,
//                     // specify the component template of your choice
//                     component: pageTemplate,
//                     // In the ^template's GraphQL query, 'id' will be available
//                     // as a graphQL variable to query for this page's data.
//                     context: {
//                         id: page.id,
//                     },
//                 })
//             })
//         })
//         .then(() => {
//             return graphql(`
//         {
//           allWordpressPost {
//             edges {
//               node {
//                 id
//                 slug
//               }
//             }
//           }
//         }
//       `)
//         })
//         .then(result => {
//             if (result.errors) {
//                 result.errors.forEach(e => console.error(e.toString()))
//                 return Promise.reject(result.errors)
//             }

//             const postTemplate = path.resolve(`./src/templates/post.js`)
//             const blogTemplate = path.resolve(`./src/templates/blog.js`)

//             // In production builds, filter for only published posts.
//             const allPosts = result.data.allWordpressPost.edges
//             const posts =
//                 process.env.NODE_ENV === 'production' ?
//                 getOnlyPublished(allPosts) :
//                 allPosts

//             // Iterate over the Wordpress array of posts
//             _.each(posts, ({ node: post }) => {
//                 // Create the Gatsby page for this WordPress post
//                 createPage({
//                     // will be the url for the page
//                     path: `/${post.slug}/`,
//                     // specify the component template of your choice
//                     component: postTemplate,
//                     // In the ^template's GraphQL query, 'id' will be available
//                     // as a graphQL variable to query for this page's data.
//                     context: {
//                         id: post.id,
//                     },
//                 })
//             })

//             // Create a paginated blog, e.g., /, /page/2, /page/3
//             paginate({
//                 createPage,
//                 items: posts,
//                 itemsPerPage: 10,
//                 pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
//                 component: blogTemplate,
//             })
//         })
//         .then(() => {
//             return graphql(`
//         {
//           allWordpressCategory(filter: { count: { gt: 0 } }) {
//             edges {
//               node {
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//         }
//       `)
//         })
//         .then(result => {
//             if (result.errors) {
//                 result.errors.forEach(e => console.error(e.toString()))
//                 return Promise.reject(result.errors)
//             }

//             const categoriesTemplate = path.resolve(`./src/templates/category.js`)

//             // Create a Gatsby page for each WordPress Category
//             _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
//                 createPage({
//                     path: `/categories/${cat.slug}/`,
//                     component: categoriesTemplate,
//                     context: {
//                         name: cat.name,
//                         slug: cat.slug,
//                     },
//                 })
//             })
//         })
//         .then(() => {
//             return graphql(`
//         {
//           allWordpressTag(filter: { count: { gt: 0 } }) {
//             edges {
//               node {
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//         }
//       `)
//         })

//         .then(result => {
//             if (result.errors) {
//                 result.errors.forEach(e => console.error(e.toString()))
//                 return Promise.reject(result.errors)
//             }

//             const tagsTemplate = path.resolve(`./src/templates/tag.js`)

//             // Create a Gatsby page for each WordPress tag
//             _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
//                 createPage({
//                     path: `/tags/${tag.slug}/`,
//                     component: tagsTemplate,
//                     context: {
//                         name: tag.name,
//                         slug: tag.slug,
//                     },
//                 })
//             })
//         })
//         .then(() => {
//             return graphql(`
//         {
//           allWordpressWpUsers {
//             edges {
//               node {
//                 id
//                 slug
//               }
//             }
//           }
//         }
//       `)
//         })
//         .then(result => {
//             if (result.errors) {
//                 result.errors.forEach(e => console.error(e.toString()))
//                 return Promise.reject(result.errors)
//             }

//             const authorTemplate = path.resolve(`./src/templates/author.js`)

//             _.each(result.data.allWordpressWpUsers.edges, ({ node: author }) => {
//                 createPage({
//                     path: `/author/${author.slug}`,
//                     component: authorTemplate,
//                     context: {
//                         id: author.id,
//                     },
//                 })
//             })
//         })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === `MarkdownRemark`) {
//         const value = createFilePath({ node, getNode })
//         createNodeField({
//             name: `slug`,
//             node,
//             value,
//         })
//     }
// }