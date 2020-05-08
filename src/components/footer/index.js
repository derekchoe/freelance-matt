import React from 'react';
import View from './style';

import Email from '../svgs/email';
import Slack from '../svgs/slack';
import Twitter from '../svgs/twitter';
import Discord from '../svgs/discord';
import Instagram from '../svgs/instagram';

const socialLinks = [
    {
        href: "mailto:silverman.me@gmail.com",
        Icon: Email,
    },
    {
        href: "https://bit.ly/2xFdL1T",
        Icon: Slack,
    },
    {
        href: "https://bit.ly/3eAISN1",
        Icon: Twitter,
    },
    {
        href: "https://bit.ly/2wNlE4Z",
        Icon: Discord,
    },
    {
        href: "https://bit.ly/2VzxUi1",
        Icon: Instagram,
    },
]

const Footer = ({ darkMode }) => (
    <View>
        <div className='footer__hello'>SAY HELLO!</div>
        <div className='footer__phone'>858.735.8742</div>
        <div className='footer__social'>
            {socialLinks.map(link => {
                const {href, Icon} = link
                return (
                <a key={href} href={href}>
                    <Icon darkMode={darkMode}/>
                </a>
            )})}
        </div>
        <div className='footer__legal'>
            © 2021 Matt Silverman, all rights reserved.
        </div>
    </View>
);

export default Footer;
