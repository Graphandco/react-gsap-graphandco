import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './shared/styles/main.scss';

import { useDarkMode } from './components/dark-mode/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/dark-mode/globalStyles';
import { lightTheme, darkTheme } from './components/dark-mode/Themes';
import Toggle from './components/dark-mode/Toggler';

import About from './pages/about';
import Header from './components/Header';
import Home from './pages/home';
import Tips from './pages/tips';

const App = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <header>
                <Header />
                <Toggle theme={theme} toggleTheme={themeToggler} />
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
                    <Route path='/about' exact>
                        <About />
                    </Route>
                </Switch>
            </main>
        </ThemeProvider>
    );
};

export default App;
