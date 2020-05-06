import React, {Fragment} from 'react';
import View from './style';
import Arrow from "../../../../svgs/arrow";

const AppDescription = ({
    header,
    company,
    linkHref = "",
    linkText = "",
    description,
}) => (
    <View>
        <div className='app-description__header-container'>
            <h3 className='app-description__header'>{header}</h3>
            <div className='app-description__company'>{company}</div>
        </div>
        <div className='app-description__description'>{description}</div>
        <div className='app-description__link'>
        {!!linkHref ? (
            <Fragment>
                <a href={linkHref}>{linkText}</a>
                <Arrow />
            </Fragment>
            ) : (
            "Currently Unavailable"
        )}
        </div>
    </View>
);

export default AppDescription;
