import React, { useContext } from 'react';

const ContextWrapper = ({ context, Component, ...extraProps }) => {
  const ctx = useContext(context);

  if (ctx && Component) {
    return (
      <Component {...extraProps} context={ctx} />
    );
  }
  return null;
}

export default ContextWrapper;
