// @flow
import styled from '@emotion/styled';

const Home = styled("div")`
    color: ${ props => props.theme.color.header};

    & .header {
        &__header {
            font-weight: bold;
            font-family: ${(props) => props.theme.font.header};
        }

        &__description {
            color: ${(props) => props.theme.color.grey};
            font-family: ${(props) => props.theme.font.base};
            font-weight: 900;
        }
    }
`;

export default Home
