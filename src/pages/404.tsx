import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { NotFoundQuery } from '../generated/graphql';
import { assertNotNull } from '../utils/assertNotNull';

const NotFoundPage = (props: { data: NotFoundQuery; location: Location }) => {
  const { data } = props;
  const siteTitle = assertNotNull(data.site.siteMetadata.title);

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
