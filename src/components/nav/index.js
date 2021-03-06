import React from "react";
import View from "./style";
import { Link, useLocation } from "react-router-dom";

// SVGS
import Twitter from "../svgs/twitter";
import LinkedIn from "../svgs/linkedin";
import AngelList from "../svgs/angel-list";
import Email from "../svgs/email";
import Hamburger from "../svgs/hamburger";

// Components
import DarkMode from './components/dark-mode'

const socialLinks = [
    {
        href: "https://bit.ly/3eAISN1",
        Icon: Twitter,
    },
    {
        href: "https://bit.ly/3euhhgf",
        Icon: LinkedIn,
    },
    {
        href: "https://bit.ly/3biCPKH",
        Icon: AngelList,
    },
    {
        href: "mailto:silverman.me@gmail.com",
        Icon: Email,
    },
];

const Nav = ({darkMode, setDarkMode,isOpen, handleOpen}) => {
    let location = useLocation().pathname;

    return (
        <View>
            <div className='nav__container'>
                <div className='nav__router'>
                    <Link
                        className={`${
                            isSelected("/", location) ? "nav__selected" : ""
                        } nav__link nav__hover`}
                        to='/'
                    >
                        <img
                            className='nav__profile nav__hover'
                            alt='profile'
                            src='https://i.ibb.co/SJCjt42/Navpic-Dark.png'
                        />
                        <span className='nav__mobile-none'>Matt Silverman</span>
                    </Link>
                    {location.includes('/about') ? (
                        <Link
                            className="nav__link nav__hover"
                            to='/'
                        >
                            <span className='nav__mobile-none'>Projects</span>
                        </Link>
                    ) : (
                        <a href="#projects" className="nav__mobile-none nav__link nav__hover">Projects</a>
                    )}
                    <Link
                        className={`${
                            isSelected("/about", location)
                                ? "nav__selected"
                                : ""
                        } nav__link nav__mobile-none nav__hover`}
                        to='/about'
                    >
                        About
                    </Link>
                </div>
                <div className='nav__links'>
                    {socialLinks.map((el) => {
                        const { Icon, href } = el;
                        return (
                            <a className="nav__hover" key={href} href={href}>
                                <Icon darkMode={darkMode} />
                            </a>
                        );
                    })}
                    <DarkMode
                        className='nav__mobile-none'
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>
                <div
                    className='nav__mobile-display'
                    onClick={() => handleOpen(!isOpen)}
                >
                    <Hamburger darkMode={darkMode} />
                </div>
            </div>
        </View>
    );
}

function isSelected(link, location){
    return link === location
}

export default Nav;
