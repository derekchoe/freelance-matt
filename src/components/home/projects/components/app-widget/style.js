// @flow
import styled from '@emotion/styled';

const AppWidget = styled("div")`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    /* grid-template-areas: ". ."; */
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.color.grey};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    padding: ${(props) => props.theme.spacing.tiny} 0;

    & .app-widget {
        &__image {
            max-width: 115px;
            max-height: 115px;
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`;

export default AppWidget;
