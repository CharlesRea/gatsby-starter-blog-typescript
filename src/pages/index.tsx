import React from 'react';
import { graphql, Link } from 'gatsby';
import { Bio } from '../components/Bio';
import { Seo } from '../components/Seo';
import { rhythm } from '../utils/typography';
import { Layout } from '../components/Layout';
import { IndexPageQuery } from '../generated/graphql';
import { assertNotNull } from '../utils/assertNotNull';

type Props = {
  data: IndexPageQuery;
  location: Location;
};

const BlogIndex = (props: Props) => {
  const { data } = props;
  const siteTitle = assertNotNull(data.site.siteMetadata.title);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                style={{ boxShadow: `none` }}
                to={assertNotNull(node.fields.slug)}
              >
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  node.frontmatter.description || assertNotNull(node.excerpt),
              }}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
