import { IStyledFlexWrapperProps } from '@/types'
import { device } from '@constants/index';
import { Alert, FormProps, Select } from 'antd';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledLoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLoader = styled(ClipLoader)`
  border-width: 20px;
`;

const StyledSelect = styled(Select)<FormProps>`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #98a2b3;
  min-width: 92px;
  height: 38px;

  @media ${device.laptopMaxM} {
    height: 40px;
  }

  & > .ant-select-arrow {
    filter: invert(67%) sepia(17%) saturate(265%) hue-rotate(179deg)
      brightness(93%) contrast(90%);
  }

  & .ant-select-selection-item {
    display: flex !important;
    align-items: center;
    text-transform: capitalize;

    @media ${device.laptopMaxM} {
      height: 40px;
    }
  }
`;

const StyledAlert = styled(Alert)`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: #e6f4ff;
  border: 1px solid #91caff;
  max-height: 30px;
  font-size: 12px;
  margin-bottom: 14px;

  @media ${device.laptopMaxM} {
    margin: 22px 0 2px 0;
    font-size: 18px;
  }

  @media ${device.tabletMax} {
    margin: 22px 0 2px 0;
    font-size: 16px;
  }

  @media ${device.mobileMaxL} {
    margin: 16px 0 2px 0;
    font-size: 14px;
  }
`;

const StyledFlexWrapper = styled.div<IStyledFlexWrapperProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
`;

export {
  StyledAlert,
  StyledFlexWrapper,
  StyledLoader,
  StyledLoaderWrapper,
  StyledSelect,
};
