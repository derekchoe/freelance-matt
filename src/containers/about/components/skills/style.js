// @flow
import styled from '@emotion/styled';

const Skills = styled("div")`
    & .skills {
        &__box {
            padding: ${(props) => props.theme.spacing.medium};
            border: 1px solid ${(props) => props.theme.color.border};
            margin-bottom: ${(props) => props.theme.spacing.small};
            border-radius: ${(props) => props.theme.radius.rounded};
        }
    }
`;

export default Skills
