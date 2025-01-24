import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IInitialFileState,
  TTempFileBody,
  TUploadDocumentType,
} from '@store/types';

const initialState: IInitialFileState = {
  viewMode: 'default',
  isModalOpen: false,
  currentUploadScreen: 0,
  tempFile: {
    type: null,
    fileType: 'default',
    path: '',
  },

  paths: {
    front: '',
    back: '',
    selfie: '',
  },
};

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    toggleViewMode(state) {
      if (state.viewMode === 'default') {
        state.viewMode = 'edit';
      } else {
        state.viewMode = 'default';
      }
    },
    setIsModalOpen(
      state,
      action: PayloadAction<{ open: boolean; type?: TUploadDocumentType }>
    ) {
      state.isModalOpen = action.payload.open;
      if (action.payload.type) {
        switch (action.payload.type) {
          case 'front':
            state.currentUploadScreen = 0;
            break;
          case 'back':
            state.currentUploadScreen = 1;
            break;
          default:
            state.currentUploadScreen = 2;
            break;
        }
      }
    },
    setCurrentScreen(state, action: PayloadAction<number>) {
      state.currentUploadScreen = action.payload;
    },
    setTempFilePath(state, action: PayloadAction<TTempFileBody>) {
      if (action.payload) {
        state.tempFile = action.payload;
      }
    },
    clearTempFilePath(state) {
      state.tempFile = initialState.tempFile;
    },
    clearPaths(state) {
      state.paths = initialState.paths;
    },
    removePath(state, action: PayloadAction<TUploadDocumentType>) {
      if (action.payload) {
        state.paths[action.payload] = '';
      }
    },
    setDocumentPath(state, action: PayloadAction<TTempFileBody>) {
      if (action.payload && action.payload.type && action.payload.path) {
        state.paths[action.payload.type] = action.payload.path;
      }
    },
  },
});

export const fileReducer = fileSlice.reducer;
export const {
  toggleViewMode,
  setIsModalOpen,
  setCurrentScreen,
  setTempFilePath,
  clearTempFilePath,
  clearPaths,
  removePath,
  setDocumentPath,
} = fileSlice.actions;
