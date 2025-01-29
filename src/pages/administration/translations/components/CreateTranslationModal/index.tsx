import { Button, Modal, Input, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTranslation } from '@pages/administration/translations/store/translationSlice.ts';
import { StyledFlagIcon } from '@pages/administration/translations/styles';
import { addTranslationSchema, yupValidator } from '@schema/registration';
import { useImprovedUXValidation } from '@hooks/useImprovedUXValidation.ts';
import { StyledFlexWrapper } from '@styles';

export const CreateTranslationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { onFinishFailed, validationMode, onBlur } = useImprovedUXValidation([
    'english',
  ]);

  const yupSync = yupValidator(addTranslationSchema, form.getFieldsValue);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCancel = (): void => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleSave = async (): Promise<void> => {
    try {
      const values = await form.validateFields();

      dispatch(AddTranslation(values));
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.log('Validation Failed:', error);
    }
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Add attributes
      </Button>

      <Modal
        title="Add translation"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleSave}
        okText="Save"
        cancelText="Cancel"
      >
        <Form
          form={form}
          autoComplete="off"
          validateTrigger={['onChange', 'onBlur']}
          layout="vertical"
          onFinish={handleSave}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="english"
            label="English"
            rules={[yupSync]}
            validateTrigger={validationMode.lastName}
          >
            <Input
              placeholder="Enter English translation"
              onBlur={onBlur('english')}
              suffix={<StyledFlagIcon className="fi fi-gb" />}
            />
          </Form.Item>
          <Form.Item name="english_alternative" label="English Alternative">
            <Input
              placeholder="Enter alternative English translation (optional)"
              suffix={<StyledFlagIcon className="fi fi-gb" />}
            />
          </Form.Item>
          <Form.Item name="armenian" label="Armenian">
            <Input
              placeholder="Enter Armenian translation"
              suffix={<StyledFlagIcon className="fi fi-am" />}
            />
          </Form.Item>

          <Form.Item name="russian" label="Russian">
            <Input
              placeholder="Enter Russian translation"
              suffix={<StyledFlagIcon className="fi fi-ru" />}
            />
          </Form.Item>

          <StyledFlexWrapper justifyContent="flex-end">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </StyledFlexWrapper>
        </Form>
      </Modal>
    </>
  );
};
