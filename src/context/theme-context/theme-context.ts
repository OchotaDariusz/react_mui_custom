import { createContext } from 'react';

export const ThemeContext = createContext({
  toggleMode: () => {},
  mode: 'light'
});
