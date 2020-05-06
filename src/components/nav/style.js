// @flow
import styled from "@emotion/styled";

const Nav = styled("nav")`
    height: ${(props) => props.theme.spacing.huge};
    ${(props) => props.theme.helpers.flexCenter};
    box-shadow: 0px 4px 9px -4px rgba(64, 61, 64, 0.84);
    color: ${(props) => props.theme.color.grey};

    & a {
        font-family: ${(props) => props.theme.font.base};
        font-weight: 600;
        color: inherit;
        cursor: pointer;
        text-decoration: inherit;
        font-size: ${(props) => props.theme.fontSize.medium};
        align-items: center;
    }

    & .nav {
        &__container {
            ${(props) => props.theme.helpers.flexCenter};
            justify-content: space-between;
            width: 550px;
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
            background-color: ${(props) => props.theme.color.border};
            margin: 0 ${(props) => props.theme.spacing.smallest};
            padding: ${(props) => props.theme.spacing.smallest};
            border-radius: ${(props) => props.theme.radius.rounded};
            ${(props) => props.theme.helpers.flexCenter};
            align-items: center;
        }

        &__links {
            ${(props) => props.theme.helpers.flexCenter};
            flex-direction: row;
            align-items: center;
        }

        &__dark {
            font-family: ${(props) => props.theme.font.header};
            font-weight: bold;
            font-size: ${(props) => props.theme.fontSize.small};
            ${(props) => props.theme.helpers.flexCenter};
            flex-direction: row;
            align-items: center;
            margin: 0 ${(props) => props.theme.spacing.tiny};
        }

        &__social {
            margin: 0 ${(props) => props.theme.spacing.tiny};
        }
    }
`;

export default Nav;
