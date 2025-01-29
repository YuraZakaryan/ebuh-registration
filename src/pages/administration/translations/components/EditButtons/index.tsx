import { Button } from 'antd';
import { StyledEditButtonsItem, StyledEditButtonsWrapper } from '../../styles';
import {
  CopyOutlined,
  DownloadOutlined,
  ExportOutlined,
  PrinterOutlined,
} from '@ant-design/icons';
import { CreateTranslationModal } from '@pages/administration/translations/components/CreateTranslationModal';

export const EditButtons = () => {
  return (
    <StyledEditButtonsWrapper>
      <StyledEditButtonsItem>
        <Button icon={<PrinterOutlined />} />
      </StyledEditButtonsItem>
      <StyledEditButtonsItem>
        <Button icon={<CopyOutlined />} />
      </StyledEditButtonsItem>
      <StyledEditButtonsItem>
        <Button icon={<DownloadOutlined />} />
      </StyledEditButtonsItem>
      <StyledEditButtonsItem>
        <Button icon={<ExportOutlined />} />
      </StyledEditButtonsItem>
      <StyledEditButtonsItem>
        <CreateTranslationModal />
      </StyledEditButtonsItem>
    </StyledEditButtonsWrapper>
  );
};
