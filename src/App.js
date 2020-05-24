import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
import './shared/styles/main.scss';

// import { useDarkMode } from './shared/dark-mode/useDarkMode';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './shared/dark-mode/globalStyles';
// import { lightTheme, darkTheme } from './shared/dark-mode/Themes';
// import Toggle from './shared/dark-mode/Toggler';

import Header from './shared/components/Header';
import Home from './home/Home';
import About from './about/About';
import Tips from './tips/pages/Tips';
import TipSingle from './tips/pages/TipSingle';
import Contact from './contact/Contact';

import { Switch as MaterialSwitch, FormControlLabel } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const themeObject = {
    palette: {
        primary: { main: '#053fb5' },
        secondary: { main: '#5e3c6f' },
        type: 'dark',
    },
    themeName: 'Graph and Co 2020',
    typography: {
        fontFamily: 'Bitter',
    },
};

const useDarkMode = () => {
    const [theme, setTheme] = useState(themeObject);
    const {
        palette: { type },
    } = theme;
    const toggleDarkMode = () => {
        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type: type === 'light' ? 'dark' : 'light',
            },
        };
        setTheme(updatedTheme);
    };
    return [theme, toggleDarkMode];
};

const App = () => {
    // const [theme, themeToggler, mountedComponent] = useDarkMode();
    // const themeMode = theme === 'light' ? lightTheme : darkTheme;

    // if (!mountedComponent) return <div />;

    const [theme, toggleDarkMode] = useDarkMode();
    const themeConfig = createMuiTheme(theme);
    console.log(themeConfig);

    return (
        <MuiThemeProvider theme={themeConfig}>
            <header>
                <Header />
                <FormControlLabel
                    control={<MaterialSwitch onClick={toggleDarkMode} />}
                />
            </header>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/tips' exact>
                        <Tips />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/tips/:id' exact>
                        <TipSingle />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/contact' exact>
                        <Contact />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/about' exact>
                        <About />
                    </Route>
                </Switch>
            </main>
        </MuiThemeProvider>
        // <ThemeProvider theme={themeMode}>
        //     <GlobalStyles />
        // <header>
        //     <Header />
        //     <Toggle theme={theme} toggleTheme={themeToggler} />
        // </header>
        // <main>
        //     <Switch>
        //         <Route path='/' exact>
        //             <Home />
        //         </Route>
        //     </Switch>
        //     <Switch>
        //         <Route path='/tips' exact>
        //             <Tips />
        //         </Route>
        //     </Switch>
        //     <Switch>
        //         <Route path='/tips/:id' exact>
        //             <TipSingle />
        //         </Route>
        //     </Switch>
        //     <Switch>
        //         <Route path='/contact' exact>
        //             <Contact />
        //         </Route>
        //     </Switch>
        //     <Switch>
        //         <Route path='/about' exact>
        //             <About />
        //         </Route>
        //     </Switch>
        // </main>
        // </ThemeProvider>
    );
};

export default App;
