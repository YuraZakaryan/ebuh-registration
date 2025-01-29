import { Button, Select, Table } from 'antd';
import styled from 'styled-components';
import { device } from '@constants/index.ts';

const StyledEditButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 12px;
`;

const StyledEditButtonsItem = styled.li``;

const StyledTranslationMainWrapper = styled.main`
  margin: 38px 0;
`;

const StyledTranslationFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  gap: 8px;
  margin-bottom: 16px;

  @media screen and ${device.mobileMaxXL} {
    flex-direction: column;
  }
`;

const StyledTypeSelect = styled(Select)`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  min-width: 247px;
`;

const StyledPopOverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 190px;
`;

const StyledPopoverLabel = styled(Button).attrs({
  type: 'text',
})`
  font-size: 16px;
  font-weight: 900;
`;

const StyledPopoverButton = styled(Button).attrs({
  type: 'text',
  position: 'left',
})`
  display: flex;
  justify-content: flex-start;
  color: #344054;
`;

const StyledFlagIcon = styled.span`
  border-radius: 50%;
`;

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    font-family: Poppins, Arial, Helvetica, sans-serif;
    background-color: #fcfcfd;
    border-color: #f2f4f7;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.color.button.secondary};
  }

  .ant-table-tbody > tr > td {
    font-family: Poppins, Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #f2f4f7;
    color: ${(props) => props.theme.color.button.secondary};
  }
`;

export {
  StyledEditButtonsItem,
  StyledEditButtonsWrapper,
  StyledPopoverButton,
  StyledPopoverLabel,
  StyledPopOverWrapper,
  StyledTable,
  StyledTranslationFilterWrapper,
  StyledTranslationMainWrapper,
  StyledTypeSelect,
  StyledFlagIcon,
};
