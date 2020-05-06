// @flow
import styled from '@emotion/styled';

const About = styled("div")`
    max-width: 550px;
    margin: auto;
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.color.black};

    & p,
    li {
        color: ${(props) => props.theme.color.grey};
        font-size: ${(props) => props.theme.fontSize.medium};
    }

    & ul,
    li {
        display: inherit;
        padding: ${(props) => props.theme.spacing.smallest} 0;
        font-size: ${(props) => props.theme.fontSize.tiny};
        margin: 0;
        font-weight: 600;
    }

    & h3 {
        margin: 0;
        font-size: ${ props => props.theme.fontSize.small};
    }

    & .about {
        &__grid {
            display: grid;
            grid-template-columns: 280px 1fr;
            grid-template-rows: 1fr;
            gap: 1px 60px;
            grid-template-areas: ". .";
        }

        &__action {
            color: #00c358;
        }
        &__profile {
            width: 280px;
        }

        &__box {
            padding: ${(props) => props.theme.spacing.small};
            border: 1px solid ${(props) => props.theme.color.border};
            margin-bottom: ${(props) => props.theme.spacing.small};
        }
    }
`;

export default About
