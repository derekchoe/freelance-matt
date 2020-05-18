import React, { Fragment } from "react";
import View from './style';
import { Link } from "react-router-dom";

import Arrow from "../../../../../../components/svgs/arrow";


const AppWidget = ({
    widget: {
        image,
        header,
        tag,
        tagLink="",
        description,
        linkHref,
        linkText,
        first = false,
        projectPage= false
    },
}) => (
    <View first={first}>
        <img
            className={first ? "app-widget__first" : "app-widget__image"}
            alt='app_image'
            src={image}
        />
        <div className='app-widget__description-container'>
            <div className='app-widget__header-container'>
                <h3 className='app-widget__header'>{header}</h3>
                <a href={tagLink} className='app-widget__company'>
                    {tag}
                </a>
            </div>
            <div className='app-widget__description'>{description}</div>
            <div className='app-widget__link'>
                <Fragment>
                    {!!projectPage ? <Link to={linkHref}>{linkText}</Link> : <a href={linkHref}>{linkText}</a>}
                    <Arrow />
                </Fragment>
            </div>
        </div>
    </View>
);

export default AppWidget;
