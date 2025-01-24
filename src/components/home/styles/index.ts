import { Button } from 'antd';
import styled from 'styled-components';

const StyledHomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLinkButton = styled(Button).attrs({
  type: 'primary',
})`
  font-size: 50px;
  padding: 36px !important;
`;

export { StyledHomeWrapper, StyledLinkButton };
