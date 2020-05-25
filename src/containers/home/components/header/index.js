import React from 'react';
import View from './style';

import Arrow from '../../../../components/svgs/arrow';

const Header = () => (
    <View>
        <h1 className='header__header'>Hello, I'm Matt.</h1>
        <h3 className='header__description'>
            A product designer from San Francisco specializing in user
            experience, interaction, and mobile design
        </h3>
        <div className='header__arrow'>
            <a className="header__arrow-link bounce" href='#projects'>
                <Arrow fill="rgb(255,146,33)" height={30} width={40} />
            </a>
        </div>
    </View>
);

export default Header;
