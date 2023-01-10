import {useContext} from "react";

import {themeContext} from "../contexts/themeContext";

const useThene = function () {
  const context = useContext(themeContext);

  if (!context) throw new Error('useTheme must be inside an themeProvider!');

  const {theme, setTheme} = context;

  return {theme, setTheme};
};

export {useThene};
