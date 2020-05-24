import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
import './shared/styles/main.scss';

import { useDarkMode } from './shared/dark-mode/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './shared/dark-mode/globalStyles';
import { lightTheme, darkTheme } from './shared/dark-mode/Themes';
import Toggle from './shared/dark-mode/Toggler';

// import About from './about/About';
import Header from './shared/components/Header';
import Home from './home/Home';
import Tips from './tips/pages/Tips';
import TipSingle from './tips/pages/TipSingle';
import Contact from './contact/Contact';

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
                    <Route path='/tips/:id' exact>
                        <TipSingle />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/contact' exact>
                        <Contact />
                    </Route>
                </Switch>
                {/* <Switch>
                    <Route path='/about' exact>
                        <About />
                    </Route>
                </Switch> */}
            </main>
        </ThemeProvider>
    );
};

export default App;
