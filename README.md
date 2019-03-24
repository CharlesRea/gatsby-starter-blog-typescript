# Gatsby Typescript blog starter

Forked version of https://github.com/gatsbyjs/gatsby-starter-blog, converted to Typescript.

## Quick start

#### Running the site
Run `yarn install` to install dependencies.

Run `yarn develop`. 

The site will run at `http://localhost:8000`. The GraphQL schema will be available at 
`http://localhost:8000/___graphql`.

#### Adding posts

Add Markdown files to the `content/blog` directory to automatically generate blog posts.

#### GraphQL codegen
[GraphQL Code Generator](https://graphql-code-generator.com/) is used to generate Typescript types
from the GraphQL schema. Run `yarn codegen` to generate the types, which will be output to 
`src/generated/graphql.ts`. Note you'll need the site itself to be running to allow obtianing
the GraphQL schema.

#### Formatting
Run `yarn format` to format with Prettier.

#### IDE support
IntelliJ support from GraphQL is set up if you install the 
[GraphQL plugin](https://plugins.jetbrains.com/plugin/8097-js-graphql).
