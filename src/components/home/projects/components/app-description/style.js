// @flow
import styled from '@emotion/styled';

const AppDescription = styled("div")`
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.color.grey};
    padding: ${(props) => props.theme.spacing.tiny}
        ${(props) => props.theme.spacing.small};

    & .app-description {
        &__header-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        &__header {
            font-family: ${(props) => props.theme.font.header};
            margin: 0;
            color: ${(props) => props.theme.color.black};
        }

        &__company {
            padding: ${(props) => props.theme.spacing.tiny};
            background-color: ${(props) => props.theme.color.border};
            color: ${(props) => props.theme.color.lightGrey};
            font-size: ${(props) => props.theme.fontSize.tiny};
            font-weight: 600;
            border-radius: ${(props) => props.theme.radius.rounded};
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
            /* margin-top: 25px; */
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        & .app-description {
            &__description {
                max-width: 90%;
            }
        }
    }
`;

export default AppDescription
