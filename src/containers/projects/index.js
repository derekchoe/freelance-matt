import React from 'react';
import View from './style';
import { Link } from "react-router-dom";
import {  useLocation } from "react-router-dom";

// Utils
import { appWidgetArray, getCarouselIds } from "./utils.js";

// SVG
import Arrow from '../../components/svgs/arrow'

const Projects = ({ darkMode}) => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const projectName = useQuery().get('name')

    const { image, header, tag, description, summary, id, images, extra, svg } = appWidgetArray[projectName];
    const {Dark, Light} = svg

    const carousel = getCarouselIds(id).map(carouselId => {
        return Object.values(appWidgetArray).find(app => app.id === carouselId);
    })


    return (
        <View gridColumns={extra ? 4 : 5}>
            <div className='projects__link-container'>
                {carousel.map((app, i) => (
                    <Link
                        className={`projects__link ${
                            i === 1 ? "projects__link-flip" : ""
                        }`}
                        key={app.link}
                        to={app.link}
                    >
                        <Arrow
                            darkMode={darkMode}
                            className={i === 0 ? "projects__link-arrow" : ""}
                        />
                        {app.header}
                    </Link>
                ))}
            </div>
            <div className='projects__app-container'>
                <img
                    alt='project_logo'
                    className='projects__image'
                    src={image}
                />
                <div className='projects__app-description'>
                    <div>
                        <span className='projects__app-tag'>{tag}</span>
                        <h1 className='projects__app-header'>{header}</h1>
                    </div>
                    {description.map((d) => (
                        <ul key={d.header}>
                            <div className='projects__app-list'>{d.header}</div>
                            {d.list.map((el) => (
                                <li key={el}>{el}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            {summary.map((el) => (
                <div key={el.header} className='projects__summary'>
                    <h3>{el.header}</h3>
                    <p>{el.description}</p>
                </div>
            ))}
            <div className='projects__images'>
                {images.map((image) => (
                    <img
                        alt='project_images'
                        className='projects__image'
                        src={image}
                        key={image}
                    />
                ))}
                <div>
                    {extra &&
                        extra.map((image) => (
                            <img
                                alt='project_images'
                                className='projects__extra'
                                src={image}
                                key={image}
                            />
                        ))}
                </div>
            </div>
            <div className='projects__image-tag'>
                {tag} core experience screens
            </div>
            <div className='projects__flow'>
                {darkMode ? <Dark /> : <Light />}
            </div>
            <div className='projects__image-tag'>
                {tag} information architecture core experience flow
            </div>
        </View>
    );
}

export default Projects;
