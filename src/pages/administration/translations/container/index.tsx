import { TablePaginationConfig, TTableParams } from '@/types';
import SelectIcon from '@assets/icon/icon-select.svg';
import { Button, Input, Popover, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { DefaultLayout } from '@layouts/default';
import { useAppDispatch, useAppSelector } from '@hooks/redux.ts';
import { EditButtons } from '../components/EditButtons';
import { GetLanguagesThunk } from '../store/thunk';
import { TTranslation } from '../store/types';
import {
  StyledFlagIcon,
  StyledPopoverButton,
  StyledPopoverLabel,
  StyledPopOverWrapper,
  StyledTranslationFilterWrapper,
  StyledTranslationMainWrapper,
  StyledTypeSelect,
} from '../styles';
import {
  ClearAllTranslations,
  UpdateTranslation,
} from '@pages/administration/translations/store/translationSlice.ts';
import { paginationOptions } from '@constants/index.ts';
import {
  EditOutlined,
  FontSizeOutlined,
  RestOutlined,
} from '@ant-design/icons';
import { StyledFlexWrapper } from '@styles';

const Translations = () => {
  const dispatch = useAppDispatch();
  const { translations } = useAppSelector((state) => state.translation);

  const [editingKey, setEditingKey] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<TTranslation | null>(null);

  const [tableParams, setTableParams] = useState<TTableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect((): void => {
    dispatch(GetLanguagesThunk());
  }, [dispatch]);

  const { Search } = Input;

  const handleEditClick = (record: TTranslation): void => {
    setEditingKey(record.key);
    setEditedData({ ...record });
  };

  const handleSaveClick = (): void => {
    if (editedData) {
      const saved = dispatch(UpdateTranslation(editedData));

      if (saved) {
        setEditingKey(null);
        setEditedData(null);
      }
    }
  };

  const handleClearTranslations = (translationKey: number) => {
    dispatch(ClearAllTranslations(translationKey));
  };

  const handleCancelClick = (): void => {
    setEditingKey(null);
    setEditedData(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof TTranslation
  ) => {
    if (editedData) {
      setEditedData({
        ...editedData,
        [field]: e.target.value,
      });
    }
  };

  const handleTableChange = (pagination: TablePaginationConfig): void => {
    setTableParams((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: pagination.current,
        pageSize: pagination.pageSize,
      },
    }));
  };

  const getPageSizeOptions = (total: number): string[] => {
    return paginationOptions.filter(
      (option: string): boolean => parseInt(option) <= total
    );
  };

  const content = (record: TTranslation) => (
    <StyledPopOverWrapper>
      <StyledPopoverButton
        icon={<EditOutlined />}
        onClick={(): void => handleEditClick(record)}
      >
        Edit
      </StyledPopoverButton>
      <StyledPopoverButton
        icon={<RestOutlined />}
        onClick={() => handleClearTranslations(record.key)}
      >
        Clear all translations
      </StyledPopoverButton>
    </StyledPopOverWrapper>
  );

  const columns: ColumnsType<TTranslation> = [
    {
      title: 'English',
      dataIndex: 'english',
      key: 'english',
      sorter: (a: TTranslation, b: TTranslation): number =>
        a.english.localeCompare(b.english),
      render: (_, record) =>
        editingKey === record.key ? (
          <Input
            value={editedData?.english}
            suffix={<StyledFlagIcon className="fi fi-gb" />}
            onChange={(e): void => handleInputChange(e, 'english')}
          />
        ) : (
          record.english
        ),
    },
    {
      title: 'English (Alternative)',
      dataIndex: 'english_alternative',
      key: 'english_alternative',
      filters: [],
      render: (_, record) =>
        editingKey === record.key ? (
          <Input
            value={editedData?.english_alternative}
            suffix={<StyledFlagIcon className="fi fi-gb" />}
            onChange={(e) => handleInputChange(e, 'english_alternative')}
          />
        ) : (
          record.english_alternative
        ),
    },
    {
      title: 'Armenian',
      dataIndex: 'armenian',
      key: 'armenian',
      filters: [],
      render: (_, record) =>
        editingKey === record.key ? (
          <Input
            value={editedData?.armenian}
            suffix={<StyledFlagIcon className="fi fi-am" />}
            onChange={(e) => handleInputChange(e, 'armenian')}
          />
        ) : (
          record.armenian
        ),
    },
    {
      title: 'Russian',
      dataIndex: 'russian',
      key: 'russian',
      filters: [],
      render: (_, record) =>
        editingKey === record.key ? (
          <Input
            value={editedData?.russian}
            suffix={<StyledFlagIcon className="fi fi-ru" />}
            onChange={(e) => handleInputChange(e, 'russian')}
          />
        ) : (
          record.russian
        ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record: TTranslation) =>
        editingKey === record.key ? (
          <>
            <Button type="link" onClick={handleSaveClick}>
              Save
            </Button>
            <Button type="link" onClick={handleCancelClick}>
              Cancel
            </Button>
          </>
        ) : (
          <Popover content={content(record)} placement="bottom" trigger="click">
            <StyledPopoverLabel type="text">...</StyledPopoverLabel>
          </Popover>
        ),
    },
  ];

  const types = [
    {
      label: 'Basic',
      value: 'basic',
    },
    {
      label: 'Error messages',
      value: 'error_messages',
    },
    {
      label: 'Notifications',
      value: 'notifications',
    },
  ];

  return (
    <DefaultLayout title="Translations">
      <EditButtons />
      <StyledTranslationMainWrapper>
        <StyledTranslationFilterWrapper>
          <StyledTypeSelect
            options={types}
            suffixIcon={<SelectIcon />}
            placeholder="Choose type"
          />
          <Search placeholder="input search text" allowClear />
          <StyledFlexWrapper>
            <Button type="text" icon={<EditOutlined />} />
            <Button type="text" icon={<FontSizeOutlined />} />
            <Button type="text" icon={<FontSizeOutlined />} />
          </StyledFlexWrapper>
        </StyledTranslationFilterWrapper>
        <Table
          dataSource={translations}
          columns={columns}
          bordered
          pagination={
            translations.length >= 10
              ? {
                  current: tableParams.pagination?.current,
                  pageSize: tableParams.pagination?.pageSize,
                  total: translations.length,
                  pageSizeOptions: getPageSizeOptions(translations.length),
                  showSizeChanger: true,
                  onChange: (page, pageSize) =>
                    handleTableChange({ current: page, pageSize }),
                }
              : false
          }
          rowKey={(record) => record.key}
          scroll={{ x: 550 }}
          onChange={handleTableChange}
        />
      </StyledTranslationMainWrapper>
    </DefaultLayout>
  );
};

export default Translations;
