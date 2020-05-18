import React from 'react';
import View from './style';

import Bio from "./components/bio";
import Skills from './components/skills'

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
