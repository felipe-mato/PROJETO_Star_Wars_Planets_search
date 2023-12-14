import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

function Header() {
  const { color, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <header>
      <button
        className="ligthDarkButton"
        onClick={ handleClick }
      >
        {color === 'Sith \u{1F534}' ? '\u{1F535}' : '\u{1F534}'}
        {' '}
      </button>
    </header>
  );
}

export default Header;
