import { graphql } from 'gatsby';
import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const LocationPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>{data.contentfulCity.name} Page</title>
      <h1 style={headingStyles}>{data.contentfulCity.name} Page</h1>
    </main>
  );
};

export default LocationPage;

export const query = graphql`
  query($id: String!) {
    contentfulCity(id: { eq: $id }) {
      name
    }
  }
`;
