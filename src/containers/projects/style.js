// @flow
import styled from '@emotion/styled';

const Projects = styled("div")`
    max-width: ${(props) => props.theme.maxWidth.desktop};
    margin: 0 auto;
    color: ${(props) => props.theme.color.header};
    padding: ${(props) => props.theme.spacing.medium};

    & li{
        letter-spacing: -0.3px;
        font-weight: 500;
    }

    & .projects {
        &__app-container {
            padding: ${(props) => props.theme.spacing.small};
            box-shadow: 0px 0px 5px -3px ${(props) =>
                props.theme.color.boxShadow};
            border-radius: ${(props) => props.theme.radius.rounded};
            background-color: ${(props) => props.theme.color.widgetBack};
        }

        &__link-container {
            display: flex;
            justify-content: space-between;
            margin: ${(props) => props.theme.spacing.medium} 0;
            font-size: ${(props) => props.theme.fontSize.small};
            font-weight: bold;
        }

        &__link {
            color: ${(props) => props.theme.color.tag};
            text-decoration: inherit;
            display: flex;
            align-items: center;
        }

        &__link-flip {
            display: flex;
            flex-direction: row-reverse;
        }

        &__link-arrow {
            transform: rotate(180deg);
        }

        &__image {
            width: 100%;
        }

        &__app-description {
            display: grid;
            grid-template-columns: auto 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 1px ${(props) => props.theme.spacing.medium};
            grid-template-areas: ". . . .";
            padding: ${(props) => props.theme.spacing.small} 0;

            & li {
                display: inherit;
                font-size: ${(props) => props.theme.fontSize.small};
                color: ${(props) => props.theme.color.list};
                line-height: 20px;
            }

            & ul {
                margin: 0;
                padding: 0;
            }
        }

        &__app-tag {
            padding: ${(props) => props.theme.spacing.smallest}
                ${(props) => props.theme.spacing.tiny};
            background-color: ${(props) => props.theme.color.widgetTag};
            font-size: ${(props) => props.theme.fontSize.small};
            color: ${(props) => props.theme.color.tag};
            font-weight: bold;
            border-radius: ${(props) => props.theme.radius.rounded};
        }

        &__app-header {
            font-family: ${(props) => props.theme.font.header};
            font-size: ${(props) => props.theme.fontSize.large};
            font-weight: 600;
        }

        &__app-list {
            font-size: ${(props) => props.theme.fontSize.medium};
            font-family: ${(props) => props.theme.font.base};
            font-weight: bold;
        }

        &__summary-container {
            padding: 0 ${ props => props.theme.spacing.small};
        }

        &__summary {
            font-family: ${(props) => props.theme.font.base};

            & p {
                font-size: ${(props) => props.theme.fontSize.medium};
            }
        }

        &__images {
            display: grid;
            grid-template-columns: ${(props) => gridNumber(props.gridColumns)};
            grid-template-rows: 1fr;
            border: 1px solid ${(props) => props.theme.color.border};
            border-radius: ${(props) => props.theme.radius.rounded};
            padding: ${(props) => props.theme.spacing.small};
            gap: 1px ${(props) => props.theme.spacing.small};
        }

        &__image {
            max-height: 200px;
            /* width: 100%; */
        }

        &__extra {
            max-width: 150px;
        }

        &__image-tag {
            text-align: center;
            font-size: ${(props) => props.theme.fontSize.small};
            padding: ${(props) => props.theme.spacing.medium} 0;
        }

        &__flow {
            display: flex;
            border-radius: ${(props) => props.theme.radius.rounded};
            border: 1px solid ${(props) => props.theme.color.border};
            padding: ${(props) => props.theme.spacing.small};
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        max-width: ${(props) => props.theme.maxWidth.mobile};
        & .projects {
            &__app-description {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                grid-template-areas: " . ";
                gap: ${(props) => props.theme.spacing.small} 1px;
            }

            &__images {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                grid-template-areas: " . ";
                gap: ${(props) => props.theme.spacing.small} 1px;
            }

            &__image {
                height: inherit;
                max-height: inherit;
                width: 100%;
            }

            &__extra {
                max-width: inherit;
                width: 100%;
            }
        }
    }
`;

function gridNumber(number){
    let count = "";
    for (let index = 0; index < number; index++) {
        count += '1fr ';
    }
    return count
}

export default Projects
