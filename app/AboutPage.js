import React from 'react';

const AboutPage = ({ context, ...extraProps}) => {
  const { theme } = context;

  return (
    <div style={{ color: theme.color, backgroundColor: theme.background, height: '90vh' }} {...extraProps}>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h2 style={{ margin: '0' }}>AboutPage</h2>
        <p>Context can be used to make some state available to any components, no matter the nesting</p>
        <p>It's similar to Redux in that sense</p>
        <p>Context is native to React, though - so no need for any 3rd party libraries</p>
        <p>Just like with Redux, it's important to be mindful of how components become connected</p>
        <p>As once they are connected, their reusability is severely limited</p>
        <p>So consider making HOCs to wrap components that wish to consume contexts</p>
        <p>That way, they can also be passed data without the use of Context</p>
      </div>
    </div>
  );
};

export default AboutPage;
