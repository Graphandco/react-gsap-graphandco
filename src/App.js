import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import './App.scss';

import { useDarkMode } from './components/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import Toggle from './components/Toggler';

import About from './pages/about';
import Header from './components/Header';
import Home from './pages/home';

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
];

const App = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const onEnter = (node) => {
        gsap.from(
            [
                node.children[0].firstElementChild,
                node.children[0].lastElementChild,
            ],
            0.6,
            {
                y: 30,
                delay: 0.6,
                ease: 'power3.InOut',
                opacity: 0,
                stagger: {
                    amount: 0.6,
                },
            }
        );
    };

    const onExit = (node) => {
        gsap.to(
            [
                node.children[0].firstElementChild,
                node.children[0].lastElementChild,
            ],
            0.6,
            {
                y: -30,
                ease: 'power3.InOut',
                stagger: {
                    amount: 0.2,
                },
            }
        );
    };
    if (!mountedComponent) return <div />;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <header>
                <Header />
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </header>
            <main>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={1200}
                                classNames='page'
                                onExit={onExit}
                                onEntering={onEnter}
                                unmountOnExit
                            >
                                <div className='page'>
                                    <Component />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </main>
        </ThemeProvider>
    );
};

export default App;
