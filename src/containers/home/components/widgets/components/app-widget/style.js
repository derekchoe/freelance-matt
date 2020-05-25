// @flow
import styled from '@emotion/styled';
import { css } from "@emotion/core";

const AppWidget = styled("div")`
    ${(props) => isFirst(props.first)};
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.color.grey};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    padding: ${(props) => props.theme.spacing.tiny};

    &:hover {
        box-shadow: 0px 0px 5px -3px ${(props) => props.theme.color.boxShadow};
        border-radius: ${(props) => props.theme.radius.rounded};
        transform: scale(1.005);
        border-bottom: 0;
        background-color: ${(props) => props.theme.color.widgetBack};
    }

    & .app-widget {
        &__first {
            width: 100%;
        }

        &__image {
            width: 115px;
            height: 115px;
            object-fit: cover;
            border-radius: ${(props) => props.theme.radius.rounded};
        }

        &__header-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        &__header {
            font-family: ${(props) => props.theme.font.header};
            margin: 0;
            color: ${(props) => props.theme.color.header};
        }

        &__description-container {
            font-family: ${(props) => props.theme.font.base};
            color: ${(props) => props.theme.color.grey};
            padding: ${(props) => props.theme.spacing.tiny};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__company {
            padding: ${(props) => props.theme.spacing.tiny};
            background-color: ${(props) => props.theme.color.selected};
            color: ${(props) =>
                props.theme.darkMode ? "rgb(255,146,33)" : "#a4a4aa"};
            font-size: ${(props) => props.theme.fontSize.tiny};
            font-weight: 600;
            border-radius: ${(props) => props.theme.radius.rounded};
            text-decoration: none;
        }

        &__description {
            font-weight: 500;
            font-size: ${(props) => props.theme.fontSize.small};
            max-width: 70%;
        }

        &__link {
            & a {
                color: inherit;
                text-decoration: inherit;
            }

            font-size: ${(props) => props.theme.fontSize.small};
            text-align: right;
            padding-top: ${(props) => props.theme.spacing.tiny};
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        & .app-widget {
            &__first {
                height: 150px;
                object-fit: cover;
                border-radius: ${(props) => props.theme.radius.rounded};
            }

            &__image {
                width: 100%;
                height: inherit;
                object-fit: inherit;
            }

            &__description {
                max-width: 90%;
            }
        }
    }
`;

function isFirst(first){
    if (first){
        return
    }

    return css`
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
        gap: 1px 1px;
    `;
}

export default AppWidget;
