import React, { useState } from 'react';
import MentionsLegales from '../../MentionsLegales';
import Politique from '../../Politique';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
    const [modalMentionsOpen, setModalMentionsOpen] = useState(false);
    const [modalPolitiqueOpen, setModalPolitiqueOpen] = useState(false);

    const handleModalMentionsOpen = () => {
        setModalMentionsOpen(!modalMentionsOpen);
    };

    const handleModalPolitiqueOpen = () => {
        setModalPolitiqueOpen(!modalPolitiqueOpen);
    };

    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modal = {
        hidden: { opacity: 0, y: '-100vh' },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
    };

    return (
        <footer>
            {/* <div className='copyright'>Graph&Co 2020</div> */}
            <div className='link' onClick={handleModalMentionsOpen}>
                Mentions légales
            </div>
            <div className='link' onClick={setModalPolitiqueOpen}>
                Politique de confidentialité
            </div>
            <AnimatePresence exitBeforeEnter>
                {modalMentionsOpen && (
                    <motion.div
                        className='backdrop'
                        onClick={handleModalMentionsOpen}
                        variants={backdrop}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <motion.div
                            variants={modal}
                            className='modal mentions-legales'
                        >
                            <MentionsLegales />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                {modalPolitiqueOpen && (
                    <motion.div
                        className='backdrop'
                        onClick={handleModalPolitiqueOpen}
                        variants={backdrop}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <motion.div
                            variants={modal}
                            className='modal politique'
                        >
                            <Politique />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* {modalPolitiqueOpen && (
                <AnimatePresence>
                    <motion.div variants={backdrop} animate='visible'>
                        <div className='backdrop' onClick={closeModal}></div>
                    </motion.div>
                    <motion.div
                        variants={modal}
                        initial='hidden'
                        animate='visible'
                    >
                        <Politique />
                    </motion.div>
                </AnimatePresence>
            )} */}
        </footer>
    );
};

export default Footer;
