import styled from 'styled-components';
import { device } from '@constants/index.ts';

const StyledDefaultPageContainer = styled.div`
  background-color: #f2f4f7;
`;

const StyledDefaultPageContent = styled.div`
  padding: 61px 50px 50px 50px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  @media ${device.tabletMax} {
    padding: 10px;
  }
`;

const StyledDefaultPageWrapper = styled.div`
  margin-top: 52px;
`;

export {
  StyledDefaultPageContainer,
  StyledDefaultPageContent,
  StyledDefaultPageWrapper,
};
