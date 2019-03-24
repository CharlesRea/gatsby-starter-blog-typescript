import React from 'react';
import { graphql, Link } from 'gatsby';
import { Bio } from '../components/Bio';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { rhythm, scale } from '../utils/typography';
import { BlogPostBySlugQuery, MarkdownRemark } from '../generated/graphql';
import { assertNotNull } from '../utils/assertNotNull';

type Props = {
  data: BlogPostBySlugQuery;
  pageContext: {
    slug: string;
    previous: MarkdownRemark | null;
    next: MarkdownRemark | null;
  };
  location: Location;
};
const BlogPostTemplate = (props: Props) => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location} title={siteTitle!}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html! }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link
              to={assertNotNull(assertNotNull(previous.fields).slug)}
              rel="prev"
            >
              ← {assertNotNull(assertNotNull(previous.frontmatter).title)}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link
              to={assertNotNull(assertNotNull(next.fields).slug)}
              rel="next"
            >
              {assertNotNull(assertNotNull(next.frontmatter).title)} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
