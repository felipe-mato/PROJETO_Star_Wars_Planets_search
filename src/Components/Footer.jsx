import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

function Footer() {
  const theme = useContext(ThemeContext)

  return <footer>Theme: {theme.color}</footer>
}

export default Footer;