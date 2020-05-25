import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './shared/styles/main.scss';

import Header from './shared/components/Header';
import Home from './home/Home';
import About from './about/About';
import Tips from './tips/pages/Tips';
import TipSingle from './tips/pages/TipSingle';
import Contact from './contact/Contact';
import Footer from './shared/components/Footer';

import { Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue,
        secondary: blue,
        background: {
            paper: '#272727',
        },
        typography: {
            color: '"CACACA"',
        },
    },
});

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const pageVariants = {
        initial: {
            opacity: 0,
            x: '-100vw',
            scale: 0.8,
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1,
        },
        out: {
            opacity: 0,
            x: '100vw',
            scale: 1.2,
        },
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper
                elevation={0}
                className={'main-wrapper ' + (darkMode ? 'dark' : 'light')}
            >
                <header>
                    <Header />
                    {darkMode ? (
                        <WbSunnyIcon
                            onClick={toggleDarkMode}
                            className={'sun'}
                        />
                    ) : (
                        <NightsStayIcon
                            onClick={toggleDarkMode}
                            className={'moon'}
                        />
                    )}
                </header>
                <main>
                    <AnimatePresence>
                        <Switch>
                            <Route path='/' exact>
                                <Home
                                    variant={pageVariants}
                                    transition={pageTransition}
                                />
                            </Route>
                            <Route path='/tips' exact>
                                <Tips
                                    variant={pageVariants}
                                    transition={pageTransition}
                                />
                            </Route>
                            <Route path='/tips/:id' exact>
                                <TipSingle
                                    variant={pageVariants}
                                    transition={pageTransition}
                                />
                            </Route>
                            <Route path='/contact' exact>
                                <Contact
                                    variant={pageVariants}
                                    transition={pageTransition}
                                />
                            </Route>
                            <Route path='/about' exact>
                                <About
                                    variant={pageVariants}
                                    transition={pageTransition}
                                />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </main>
                <Footer />
            </Paper>
        </ThemeProvider>
    );
};

export default App;
