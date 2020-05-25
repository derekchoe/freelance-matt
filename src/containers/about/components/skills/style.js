// @flow
import styled from '@emotion/styled';

const Skills = styled("div")`
    & li {
        letter-spacing: -0.2px;
        font-size: ${(props) => props.theme.fontSize.small};
    }

    & .skills {
        &__header {
            color: ${(props) =>
                props.theme.darkMode ? "rgb(255,146,33)" : "#22222b"};
        }

        &__box {
            padding: ${(props) => props.theme.spacing.medium};
            border: 1px solid ${(props) => props.theme.color.border};
            margin-bottom: ${(props) => props.theme.spacing.small};
            border-radius: ${(props) => props.theme.radius.rounded};
            font-weight: bold;
        }
    }
`;

export default Skills
