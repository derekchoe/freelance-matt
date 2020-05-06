import React from 'react';
import View from './style';

import { aboutArray, bioArray } from "./utils";

const About = () => (
    <View>
        <h1>About</h1>
        <div className="about__grid">
            <div>
                <img
                    className='about__profile'
                    alt='profile'
                    src='https://i.ibb.co/8mJr1CC/about-picture.png'
                ></img>
                {bioArray.map( bio => (
                    bio
                ))}
            </div>
            <div>
                {aboutArray.map((item) => (
                    <div className="about__box">
                        <h3>{item.header}</h3>
                        <ul>
                            {item.list.map((listItem) => (
                                <li>{listItem}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </View>
);

export default About;
