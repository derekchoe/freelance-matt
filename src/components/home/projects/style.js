// @flow
import styled from '@emotion/styled';

const Projects = styled("div")`
    & .projects {
        &__action-container {
            padding: ${(props) => props.theme.spacing.small};
            box-shadow: 0px 0px 6px -3px rgba(64, 61, 64, 0.84);
            border-radius: ${(props) => props.theme.radius.rounded};
        }

        &__action-logo {
            width: 100%;
        }
    }
`;

export default Projects
