// @flow
import styled from '@emotion/styled';

const Home = styled("div")`
    padding: ${(props) => props.theme.spacing.huge}
        ${(props) => props.theme.spacing.medium};
    max-width: ${(props) => props.theme.maxWidth.desktop};
    margin: auto;

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        max-width: ${(props) => props.theme.maxWidth.mobile};
        padding: ${(props) => props.theme.spacing.large};
    }
`;

export default Home
