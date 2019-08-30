export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d689184126d1e338da154c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1241yfqb',
                  apiId: '9d142a8e-d8b8-45c3-a690-c244caeb6dbd'
                },
                {
                  buildHookId: '5d689183d6bb186c6b56bd4d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d6y255su',
                  apiId: 'd818117e-f0df-416e-9a6b-7e8493e368d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dacarva/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d6y255su.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
