import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('DarksideMode');
  function toggleTheme() {
    setThemeColor(themeColor === 'DarksideMode' ? 'LightsideMode' : 'DarksideMode');
  }
  return (
    <ThemeContext.Provider
      value={
        { color: themeColor, toggleTheme }
      }
    >
      <div className={ `app ${themeColor}` }>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
