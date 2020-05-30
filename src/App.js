import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './shared/styles/main.scss';

import Header from './shared/components/Header';
import Home from './home/Home';
import About from './about/About';
import { TipProvider } from './tips/components/TipContext';
import { AboutProvider } from './about/components/AboutContext';
import Tips from './tips/pages/Tips';
import TipSingle from './tips/pages/TipSingle';
import Contact from './contact/Contact';
import Footer from './shared/components/Footer';
import CookiesBanner from './shared/components/CookiesBanner';

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
        text: {
            primary: '#e2e2e2',
        },
    },
});

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        text: {
            primary: 'rgba(0, 0, 0, 0.87);',
        },
    },
});

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0,
            x: '-100vw',
        },
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: '100vw',
        },
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <TipProvider>
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
                        <AboutProvider>
                            <AnimatePresence exitBeforeEnter>
                                <Switch
                                    location={location}
                                    key={location.pathname}
                                >
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
                        </AboutProvider>
                    </main>
                    {location.pathname !== '/' && <Footer />}

                    <CookiesBanner />
                </Paper>
            </TipProvider>
        </ThemeProvider>
    );
};

export default App;
