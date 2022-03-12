import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, color: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(themeReducer, {
    color: 'blue',
  });

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
}
