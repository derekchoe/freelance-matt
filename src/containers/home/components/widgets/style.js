// @flow
import styled from '@emotion/styled';

const Projects = styled("div")`
    & h3 {
        color: ${(props) => props.theme.color.header};
    }

    & .widgets__header{
        padding: ${ props => props.theme.spacing.large} 0;
        margin: 0;
        font-size: ${ props => props.theme.fontSize.huge};
        font-weight:bold;
        font-family: ${ props => props.theme.font.base};
    }
`;

export default Projects
