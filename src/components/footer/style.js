// @flow
import styled from '@emotion/styled';

const Footer = styled('footer')`
    ${ props => props.theme.helpers.flexCenter};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${ props => props.theme.font.base};
    color: ${ props => props.theme.color.grey};
    padding: ${ props => props.theme.spacing.large} 0;
    font-size: ${ props => props.theme.fontSize.medium};

    & .footer {
        &__hello{
            font-weight: 900;
        }

        &__phone{
            padding: ${ props => props.theme.spacing.small} 0;
        }

        &__social{
            width: 150px;
            ${ props => props.theme.helpers.flexCenter};
            justify-content: space-between;
            margin-bottom: ${ props => props.theme.spacing.medium};
        }

        &__legal{
            margin-top: ${ props => props.theme.spacing.small};
            font-size: ${ props => props.theme.fontSize.tiny};
        }
    }

`;

export default Footer
