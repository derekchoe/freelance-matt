import React from 'react';
import View from './style';

import Email from '../svgs/email';
import Slack from '../svgs/slack';
import Twitter from '../svgs/twitter';
import Discord from '../svgs/discord';
import Instagram from '../svgs/instagram';


const Footer = ({ darkMode }) => (
    <View>
        <div className='footer__hello'>SAY HELLO!</div>
        <div className='footer__phone'>858.735.8742</div>
        <div className='footer__social'>
            <Email darkMode={darkMode} />
            <Slack darkMode={darkMode} />
            <Twitter darkMode={darkMode} />
            <Discord darkMode={darkMode} />
            <Instagram darkMode={darkMode} />
        </div>
        <div className='footer__legal'>
            © 2021 Matt Silverman, all rights reserved.
        </div>
    </View>
);

export default Footer;
