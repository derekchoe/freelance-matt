import React from 'react';
import View from './style';

// Utils
import {appWidgetArray} from './utils'

// Components
import AppWidget from './components/app-widget'

const Projects = () => (
    <View>
        <h3>Projects</h3>
        {appWidgetArray.map((widget) => (
            <AppWidget key={widget.header} widget={widget} />
        ))}
    </View>
);

export default Projects;
