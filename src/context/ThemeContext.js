import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [lightTheme, setLightTheme] = useState(false);
    return (
        <ThemeContext.Provider value={[lightTheme, setLightTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
