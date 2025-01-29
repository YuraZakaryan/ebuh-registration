import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetLanguagesThunk } from './thunk';
import { TInitialTranslationState, TLanguage, TTranslation } from './types';
import { translationMockData } from '@pages/administration/translations/mockData';

const initialState: TInitialTranslationState = {
  languages: {
    items: [],
    isLoading: false,
    isError: false,
  },
  defaultLanguage: '',
  translations: translationMockData || [],
};

export const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    GetDefaultLanguage(state): void {
      const defaultLanguage = state.languages.items.find(
        (lang: TLanguage) => lang.default === 1
      );
      state.defaultLanguage = defaultLanguage?.slug || null;
    },
    AddTranslation(
      state,
      action: PayloadAction<Omit<TTranslation, 'key'>>
    ): void {
      const newTranslation = {
        ...action.payload,
        key: state.translations.length + 1,
      };

      state.translations.unshift(newTranslation);
    },
    UpdateTranslation(state, action: PayloadAction<TTranslation>): void {
      const index = state.translations.findIndex(
        (item) => item.key === action.payload.key
      );
      if (index !== -1) {
        state.translations[index] = action.payload;
      }
    },
    ClearAllTranslations(state, action: PayloadAction<string | number>): void {
      const index = state.translations.findIndex(
        (item) => item.key === action.payload
      );
      if (index !== -1) {
        const currentTranslation = state.translations[index];

        state.translations[index] = {
          key: currentTranslation.key,
          english: currentTranslation.english,
          english_alternative: '',
          armenian: '',
          russian: '',
        };
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        GetLanguagesThunk.fulfilled,
        (state, action: PayloadAction<TLanguage[]>): void => {
          state.languages = {
            items: action.payload,
            isError: false,
            isLoading: false,
          };

          const defaultLang = action.payload.find(
            (lang): boolean => lang.default === 1
          );
          state.defaultLanguage = defaultLang?.slug || '';
        }
      )
      .addCase(GetLanguagesThunk.pending, (state): void => {
        state.languages = {
          items: [],
          isLoading: true,
          isError: false,
        };
      })
      .addCase(GetLanguagesThunk.rejected, (state): void => {
        state.languages = {
          items: [],
          isError: true,
          isLoading: false,
        };
      }),
});

export const translationReducer = translationSlice.reducer;
export const {
  GetDefaultLanguage,
  UpdateTranslation,
  ClearAllTranslations,
  AddTranslation,
} = translationSlice.actions;
