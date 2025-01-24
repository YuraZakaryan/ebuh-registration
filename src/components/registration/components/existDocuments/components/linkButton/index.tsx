import React, { memo } from 'react';
import LinkIcon from '@assets/icon/link.svg';
import { ILinkButtonProps } from '@components/registration/types';
import { StyledExistDocumentButton } from '@components/registration/components/existDocuments/styles';

export const LinkButton: React.FC<ILinkButtonProps> = memo((props) => {
  const { onClick, children } = props;
  return (
    <StyledExistDocumentButton
      icon={<LinkIcon />}
      iconPosition="start"
      onClick={() => onClick('front')}
    >
      {children}
    </StyledExistDocumentButton>
  );
});

LinkButton.displayName = 'LinkButton';
