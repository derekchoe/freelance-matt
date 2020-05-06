import React from 'react';
import View from './style';

import AppDescription from '../app-description'



const AppWidget = ({
    widget: { image, header, company, description, linkHref, linkText },
}) => (
    <View>
        <img className='app-widget__image' alt='app_image' src={image} />
        <AppDescription
            header={header}
            company={company}
            description={description}
            linkHref={linkHref}
            linkText={linkText}
        />
    </View>
);

export default AppWidget;
