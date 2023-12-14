import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

function Footer() {
  const { color } = useContext(ThemeContext);

  return (
    <footer>
      Theme:
      {' '}
      {color}
    </footer>
  );
}

export default Footer;
