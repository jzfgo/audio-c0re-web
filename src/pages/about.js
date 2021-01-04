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
const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>About Page</title>
      <h1 style={headingStyles}>About Page</h1>
    </main>
  );
};

export default AboutPage;
