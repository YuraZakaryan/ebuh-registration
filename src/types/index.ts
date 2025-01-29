import { GetProp, TableProps } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import React from 'react';

export type TPageRoute = {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
};

export type TCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type TNotificationType = 'success' | 'info' | 'warning' | 'error';

export type TRouterPaths = '/' | '/registration' | '/admin/translations';

type TButtonColor = {
  primary: string;
};

type TPrimaryColor = {
  primary: string;
  button: TButtonColor;
};
export type TTheme = {
  color: TPrimaryColor;
};

export interface IStyledFlexWrapperProps {
  justifyContent?: string;
  alignItems?: string;
}

export type TablePaginationConfig = Exclude<
  GetProp<TableProps, 'pagination'>,
  boolean
>;

export type TTableParams = {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>['field'];
  sortOrder?: SorterResult<any>['order'];
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
};
