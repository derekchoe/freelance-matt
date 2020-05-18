import React from 'react';
import View from './style';

import {bioArray} from '../utils'

const Bio = () => (
    <View>
        <img
            className='bio__profile'
            alt='profile'
            src='https://i.ibb.co/8mJr1CC/about-picture.png'
        ></img>
        {bioArray.map((bio, i) => (
            <div key={i}>{bio}</div>
        ))}
    </View>
);

export default Bio;
