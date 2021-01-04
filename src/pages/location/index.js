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
const LocationIndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Locations</title>
      <h1 style={headingStyles}>Locations</h1>
    </main>
  );
};

export default LocationIndexPage;
