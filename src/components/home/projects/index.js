import React from 'react';
import View from './style';

// Utils
import {appWidgetArray} from './utils'

// Components
import AppWidget from './components/app-widget'
import AppDescription from './components/app-description'



const Projects = () => (
    <View id="projects">
        <h3>Projects</h3>
        <div className='projects__action-container'>
            <img
                className='projects__action-logo'
                src='https://i.ibb.co/chkDcHV/Action-Image.png'
                alt='action_app'
            />
            <AppDescription
                header='Action App'
                description='Sports betting insights & analytics, improving betting
                experiences through data, tools, news & live odds'
                company="Action Network"
            />
        </div>
        {appWidgetArray.map((widget) => (
            <AppWidget key={widget.header} widget={widget} />
        ))}
    </View>
);

export default Projects;
