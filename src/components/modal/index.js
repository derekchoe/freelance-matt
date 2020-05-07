import React from 'react';
import View from './style';
import { Link } from "react-router-dom";

import DarkMode from '../nav/components/dark-mode'

const Modal = ({ darkMode, setDarkMode, handleOpen }) => (
    <View>
        <div className='modal__container'>
            <DarkMode
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                className='modal__link'
            />
            <Link
                onClick={() => handleOpen(false)}
                className='modal__link'
                to='/'
            >
                <img
                    className='modal__profile'
                    alt='profile'
                    src='https://i.ibb.co/SJCjt42/Navpic-Dark.png'
                />
                Matt Silverman
            </Link>
            <Link
                onClick={() => handleOpen(false)}
                className='modal__link'
                to='/about'
            >
                About
            </Link>
        </div>
    </View>
);

export default Modal;
