import React, {Fragment} from "react";
import View from "./style";
import { Link } from "react-router-dom";

// SVGS
import Twitter from "../svgs/twitter";
import LinkedIn from "../svgs/linkedin";
import AngelList from "../svgs/angel-list";
import Email from "../svgs/email";
import Dark from "../svgs/dark";
import Light from "../svgs/light";

const Nav = ({darkMode, setDarkMode}) => {
    return (
        <View>
            <div className='nav__container'>
                <div className='nav__router'>
                    <Link className='nav__selected' to='/'>
                        <img
                            className='nav__profile'
                            alt='profile'
                            src='https://i.ibb.co/SJCjt42/Navpic-Dark.png'
                        />{" "}
                        Matt Silverman
                    </Link>
                    <a className='nav__selected' href='#projects'>
                        Projects
                    </a>
                    <Link className='nav__selected' to='/about'>
                        About
                    </Link>
                </div>
                <div className='nav__links'>
                    <Twitter darkMode={darkMode} className='nav__social' />
                    <LinkedIn darkMode={darkMode} className='nav__social' />
                    <AngelList darkMode={darkMode} className='nav__social' />
                    <Email darkMode={darkMode} className='nav__social' />
                    <div onClick={() => setDarkMode(!darkMode)} className='nav__dark'>
                        {darkMode ? (
                            <Fragment>
                                <Light /> Light Mode
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Dark /> Dark Mode
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </View>
    );
}

export default Nav;
