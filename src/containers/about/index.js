import React from 'react';
import View from './style';

import Bio from '../../components/about/bio'
import Skills from '../../components/about/skills'

const About = () => (
    <View>
        <h1>About</h1>
        <div className="about__grid">
            <Bio/>
            <Skills/>
        </div>
    </View>
);

export default About;
