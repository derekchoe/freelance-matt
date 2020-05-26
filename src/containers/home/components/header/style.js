// @flow
import styled from '@emotion/styled';

const Home = styled("div")`
    color: ${(props) => props.theme.color.header};

    & .header {
        &__header {
            font-weight: bold;
            font-family: ${(props) => props.theme.font.header};
            font-size: ${(props) => props.theme.fontSize.largest};
        }

        &__description {
            color: ${(props) => props.theme.color.grey};
            font-family: ${(props) => props.theme.font.base};
            font-weight: 900;
            font-size: ${(props) => props.theme.fontSize.huge};
        }

        &__arrow {
            transform: rotate(90deg);
            height: 200px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        &__arrow-link {
            align-self: flex-end;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            margin: 0 auto 0 auto;
            transform-origin: bottom;
        }
    }

    & .bounce {
        animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }
    @keyframes bounce-7 {
        0%,
        50%,
        100% {
            transform: translateX(0);
        }
        25%,
        75% {
            transform: translateX(-25px);
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        & .header {
            &__arrow {
                height: 400px;
            }

            &__header{
                font-size: ${ props => props.theme.fontSize.huge};
            }

            &__description {
                font-size: ${(props) => props.theme.fontSize.large};
            }
        }
    }
`;

export default Home
