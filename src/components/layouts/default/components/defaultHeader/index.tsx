import { QuestionCircleTwoTone, SettingFilled } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React, { memo } from 'react';
import { StyledFlexWrapper } from '@styles';
import { IDefaultLayoutHeader } from '../../types';
import {
  StyledBradCrumbIcon,
  StyledDefaultLayoutIcon,
  StyledDefaultLayoutTitle,
  StyledHeaderWrapper,
} from '../styles';

export const DefaultHeader: React.FC<IDefaultLayoutHeader> = memo((props) => {
  const { title } = props;

  return (
    <StyledHeaderWrapper>
      <StyledFlexWrapper alignItems="center">
        <StyledDefaultLayoutTitle>{title}</StyledDefaultLayoutTitle>
        <StyledDefaultLayoutIcon>
          <QuestionCircleTwoTone />
        </StyledDefaultLayoutIcon>
      </StyledFlexWrapper>
      <Breadcrumb
        items={[
          {
            title: (
              <StyledBradCrumbIcon>
                <SettingFilled />
              </StyledBradCrumbIcon>
            ),
          },
          {
            title,
            href: `/admin/${title.toLowerCase()}`,
          },
        ]}
      />
    </StyledHeaderWrapper>
  );
});

DefaultHeader.displayName = 'DefaultHeader';
