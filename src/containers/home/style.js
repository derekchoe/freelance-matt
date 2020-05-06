// @flow
import styled from '@emotion/styled';

const Home = styled("div")`
    padding: ${(props) => props.theme.spacing.huge}
        ${(props) => props.theme.spacing.medium};
    max-width: 550px;
    margin: auto;

    & .home {
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        max-width: 250px;
        padding: ${(props) => props.theme.spacing.large};
    }
`;

export default Home
