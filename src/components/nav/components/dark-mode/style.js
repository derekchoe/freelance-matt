// @flow
import styled from '@emotion/styled';

const DarkMode = styled("div")`
    font-family: ${(props) => props.theme.font.header};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.small};
    ${(props) => props.theme.helpers.flexCenter};
    flex-direction: row;
    align-items: center;
    margin: 0 ${(props) => props.theme.spacing.tiny};
    cursor: pointer;
`;

export default DarkMode
