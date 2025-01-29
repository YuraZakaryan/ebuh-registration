import { IItemsWithRequestStatus } from '@store/types';

export type TLanguage = {
  id: string;
  name: string;
  slug: string;
  flag: string;
  default: 0 | 1;
  status: 0 | 1;
  published: 0 | 1;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TTranslation = {
  key: number;
  english: string;
  english_alternative: string;
  armenian: string;
  russian: string;
};

export type TInitialTranslationState = {
  languages: IItemsWithRequestStatus<TLanguage>;
  defaultLanguage: string | null;
  translations: TTranslation[];
};
