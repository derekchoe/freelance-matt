import React, {Fragment} from 'react';
import View from './style';

import Dark from "../../../svgs/dark";
import Light from "../../../svgs/light";

const DarkMode = ({ darkMode, setDarkMode, className }) => (
    <View className={className} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
            <Fragment>
                <Light /> Light Mode
            </Fragment>
        ) : (
            <Fragment>
                <Dark /> Dark Mode
            </Fragment>
        )}
    </View>
);

export default DarkMode;
