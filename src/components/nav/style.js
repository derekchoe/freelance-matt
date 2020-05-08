// @flow
import styled from "@emotion/styled";

const Nav = styled("nav")`
    height: ${(props) => props.theme.spacing.huge};
    ${(props) => props.theme.helpers.flexCenter};
    box-shadow: 0px 4px 9px -4px ${(props) => props.theme.color.boxShadow};
    color: ${(props) => props.theme.color.grey};
    padding: ${(props) => props.theme.spacing.small} 0;
    background-color: ${(props) =>
        props.theme.darkMode ? "#2b2b37" : "inherit"};

    & a {
        font-family: ${(props) => props.theme.font.base};
        font-weight: 600;
        color: inherit;
        text-decoration: inherit;
        font-size: ${(props) => props.theme.fontSize.medium};
        align-items: center;
    }

    & .nav {
        &__container {
            ${(props) => props.theme.helpers.flexCenter};
            justify-content: space-between;
            width: 550px;
            padding: 0 ${(props) => props.theme.spacing.small};
        }

        &__profile {
            width: 15px;
            height: 15px;
            margin-right: ${(props) => props.theme.spacing.smallest};
        }

        &__router {
            display: flex;
        }

        &__selected {
            background-color: ${(props) => props.theme.color.selected};
            padding: ${(props) => props.theme.spacing.smallest};
            border-radius: ${(props) => props.theme.radius.rounded};
            align-items: center;
            color: ${(props) => props.theme.color.tag};
        }

        &__link {
            margin: 0 ${(props) => props.theme.spacing.smallest};
            ${(props) => props.theme.helpers.flexCenter};
        }

        &__links {
            & a {
                margin: 0 ${(props) => props.theme.spacing.tiny};
            }

            ${(props) => props.theme.helpers.flexCenter};
            flex-direction: row;
            align-items: center;
        }

        &__mobile-display {
            display: none;
        }
    }

    @media (max-width: ${(props) => props.theme.media.tablet}) {
        & .nav__links {
            & a {
                display: none;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        & .nav {
            &__container {
                max-width: 300px;
            }

            &__profile {
                width: 20px;
                height: 20px;
            }

            &__mobile-none {
                display: none;
            }

            &__mobile-display {
                display: inherit;
            }

            &__selected {
                background-color: inherit;
            }
        }
    }
`;

export default Nav;
