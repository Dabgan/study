import styled from 'styled-components/macro';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Wrapper } from './Root.styles';

export const LoginViewWrapper = styled(ViewWrapper)`
    ${({ theme }) => theme.flexCenter()}
`;

export const LoginWrapper = styled(Wrapper)`
    height: 100vh;
    align-items: center;
`;
