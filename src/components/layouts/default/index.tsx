import React, { PropsWithChildren } from 'react';
import { DefaultHeader } from './components/defaultHeader';
import { StyledDefaultPageContainer, StyledDefaultPageContent, StyledDefaultPageWrapper } from './styles';
import { IDefaultLayoutHeader } from './types';

export const DefaultLayout: React.FC<
  PropsWithChildren<IDefaultLayoutHeader>
> = (props) => {
  const { title, children } = props;

  return (
    <StyledDefaultPageContainer>
      <StyledDefaultPageContent>
        <DefaultHeader title={title} />
        <StyledDefaultPageWrapper>{children}</StyledDefaultPageWrapper>
      </StyledDefaultPageContent>
    </StyledDefaultPageContainer>
  );
};
