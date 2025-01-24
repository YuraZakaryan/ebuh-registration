import { PropsWithChildren } from 'react';
import {
  EDocumentType,
  TDocumentsUploadTypePath,
  TUploadDocumentType,
} from '@store/types';
import { ERole } from '@store/types';

export type TRegistrationFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  role: ERole | null;
  documentType: EDocumentType | null;
  documentNumber: string;
  documents: TDocumentsUploadTypePath;
};

export interface IUploadDocument {
  label: string;
  description?: string;
  type: TUploadDocumentType;
}

export interface ILinkButtonProps extends PropsWithChildren {
  onClick: (type: TUploadDocumentType) => void;
}

export type TStep = {
  title: string;
  content: React.ReactNode;
  status: 'finish' | 'wait';
  type: 'front' | 'back' | 'selfie';
};

export interface IShowDocumentProps {
  path: string;
  type: TUploadDocumentType;
}
