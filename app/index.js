import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './context';
import ContextWrapper from './ContextWrapper';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';

const App = () => {
  const [theme, setTheme] = useState({ color: '#34495e', background: '#7f8c8d'});
  const [page, setPage] = useState('landing');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <header style={{ color: theme.color, backgroundColor: theme.background, padding: '15px', display: 'flex', justifyContent: 'center'}}>
        <button style={{ marginRight: '20px'}} onClick={() => setPage('landing')}>To Landing</button>
        <button onClick={() => setPage('about')}>To About</button>
      </header>

      {page === 'landing' &&
        <ContextWrapper context={ThemeContext} Component={LandingPage} />
      }
      {page === 'about' &&
        <ContextWrapper context={ThemeContext} Component={AboutPage} />
      }
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));