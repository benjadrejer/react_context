import React, { useState } from 'react';

const LandingPage = ({ context, ...extraProps}) => {
  const { theme, setTheme } = context;
  const [color, setColor] = useState('red');
  const [background, setBackground] = useState('blue');

  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }} {...extraProps}>
      <div style={{ maxWidth: '500px', margin: 'auto', height: '90vh' }}>
        <h2 style={{ margin: 'auto', textAlign: 'center' }}>LandingPage</h2>
        <label htmlFor="color" style={{ display: 'flex', margin: '5px', justifyContent: 'center' }}>
          <span style={{ marginRight: '10px' }}>Color</span>
          <input type="text" placeholder="Color" id="color" onChange={(e) => setColor(e.target.value)} />
        </label>
        <label htmlFor="background" style={{ display: 'flex', margin: '5px', justifyContent: 'center' }}>
          <span style={{ marginRight: '10px' }}>Background</span>
          <input type="text" placeholder="Background" id="background" onChange={(e) => setBackground(e.target.value)} />
        </label>
        <button role="button" onClick={() => setTheme({ ...theme, color, background })} style={{ display: 'block', margin: 'auto' }}>
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
