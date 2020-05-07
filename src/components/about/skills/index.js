import React from 'react';
import View from './style';

import {aboutArray} from '../utils'

const Skills = () => (
    <View>
        {aboutArray.map((item) => (
            <div key={item.header} className='skills__box'>
                <h3>{item.header}</h3>
                <ul>
                    {item.list.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                    ))}
                </ul>
            </div>
        ))}
    </View>
);

export default Skills;
