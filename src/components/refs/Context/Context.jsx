import React from "react";

const state = {
  theme: "",
  changeTheme: () => {},
};

const ThemeContext = React.createContext({ ...state });
export default ThemeContext;
