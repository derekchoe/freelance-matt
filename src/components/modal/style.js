import styled from '@emotion/styled';

const Modal = styled("div")`
    display: inherit;
    width: 100vw;
    height: 200vh;
    z-index: ${(props) => props.theme.zIndex.modal};
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.color.background};

    & .modal {
        &__container {
            text-align: center;
            padding: ${(props) => props.theme.spacing.medium};
        }

        &__link {
            padding: ${(props) => props.theme.spacing.small};
            ${(props) => props.theme.helpers.flexCenter};
            font-family: ${(props) => props.theme.font.base};
            color: inherit;
            font-size: ${(props) => props.theme.fontSize.base};
            text-decoration: none;
            color: ${(props) => props.theme.color.header};
            font-weight: 500;
            margin: ${(props) => props.theme.spacing.small} 0;
            border-radius: ${(props) => props.theme.radius.rounded};
        }

        &__link:hover {
            background-color: ${(props) => props.theme.color.border};
        }

        &__profile {
            width: 20px;
            margin-right: ${(props) => props.theme.spacing.tiny};
        }
    }

    @media (min-width: ${(props) => props.theme.media.mobile}) {
        display: none;
    }
`;

export default Modal
