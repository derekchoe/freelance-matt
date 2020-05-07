import styled from '@emotion/styled';

const Bio = styled("div")`
    & .bio {
        &__profile {
            width: 280px;
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        & .bio {
            &__profile {
                width: 100%;
            }
        }
    }
`;

export default Bio
