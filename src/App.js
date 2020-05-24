import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
import './shared/styles/main.scss';

import Header from './shared/components/Header';
import Home from './home/Home';
import About from './about/About';
import Tips from './tips/pages/Tips';
import TipSingle from './tips/pages/TipSingle';
import Contact from './contact/Contact';
import Footer from './shared/components/Footer';

import { Switch as MaterialSwitch, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper
                elevation={0}
                className={'main-wrapper ' + (darkMode ? 'dark' : 'light')}
            >
                <header>
                    <Header />
                    <MaterialSwitch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
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
                <Footer />
            </Paper>
        </ThemeProvider>
    );
};

export default App;
