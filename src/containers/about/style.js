// @flow
import styled from '@emotion/styled';

const About = styled("div")`
    max-width: 550px;
    margin: auto;
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.color.header};
    padding: ${(props) => props.theme.spacing.medium};

    & p,
    li {
        color: ${(props) => props.theme.color.grey};
        font-size: ${(props) => props.theme.fontSize.medium};
        display: inherit;
    }

    & li{
        line-height: 25px;
    }

    & ul {
        padding: ${(props) => props.theme.spacing.smallest} 0;
        margin: 0;
    }

    & h3 {
        color: ${(props) => props.theme.color.tag};
        margin: 0;
        font-size: ${(props) => props.theme.fontSize.base};
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
    }

    @media (max-width: ${(props) => props.theme.media.mobile}) {
        max-width: 275px;
        padding: ${(props) => props.theme.spacing.medium};

        & .about {
            &__grid {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr auto;
                grid-template-areas: ".";
            }
        }
    }
`;

export default About
