import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/style.scss';

import Header from './shared/components/Header';
import Home from './home/Home';
import About from './about/About';
import ThemeContextProvider from './context/ThemeContext';
import { TipProvider } from './tips/components/TipContext';
import { AboutProvider } from './about/AboutContext';
import Tips from './tips/pages/Tips';
import TipSingle from './tips/pages/TipSingle';
import Contact from './contact/Contact';
import Footer from './shared/components/Footer';
// import CookiesBanner from './shared/components/CookiesBanner';
import Realisations from './realisations/Realisations';
import AboutCompetences from './about/AboutCompetences';
import AboutExp from './about/AboutExp';
import AboutParcours from './about/AboutParcours';
import AboutNavigation from './about/AboutNavigation';

const App = () => {
    const location = useLocation();

    const pageVariants = {
        initial: {
            opacity: 0,
            x: '-100vw'
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: '100vw'
        }
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.4
    };

    const about = ['/about', '/competences', '/experience', '/parcours'];
    return (
        <ThemeContextProvider>
            <TipProvider>
                <header>
                    <Header />
                </header>
                <main>
                    {about.includes(location.pathname) && <AboutNavigation />}
                    <AboutProvider>
                        <AnimatePresence exitBeforeEnter>
                            <Switch location={location} key={location.pathname}>
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
                                <Route path='/competences' exact>
                                    <AboutCompetences
                                        variant={pageVariants}
                                        transition={pageTransition}
                                    />
                                </Route>
                                <Route path='/experience'>
                                    <AboutExp
                                        variant={pageVariants}
                                        transition={pageTransition}
                                    />
                                </Route>
                                <Route path='/parcours'>
                                    <AboutParcours
                                        variant={pageVariants}
                                        transition={pageTransition}
                                    />
                                </Route>
                                <Route path='/realisations' exact>
                                    <Realisations
                                        variant={pageVariants}
                                        transition={pageTransition}
                                    />
                                </Route>
                            </Switch>
                        </AnimatePresence>
                    </AboutProvider>
                </main>
                {location.pathname !== '/' && <Footer />}

                {/* <CookiesBanner /> */}
            </TipProvider>
        </ThemeContextProvider>
    );
};

export default App;
