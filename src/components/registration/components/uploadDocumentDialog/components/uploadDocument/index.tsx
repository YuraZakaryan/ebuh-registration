import React, { memo, useRef } from 'react';
import { useAppDispatch } from '@hooks/redux.ts';
import { useNotification } from '@hooks/useNotification.ts';
import {
  setDocumentPath,
  setTempFilePath,
  toggleViewMode,
} from '@store/reducer';
import { TTempFileBody } from '@store/types';
import { documentExtensions, imageExtensions } from '@constants/index.ts';
import { convertPdfToImage } from '@/utils/image';
import {
  StyledUploadDocumentButton,
  StyledUploadDocumentContent,
  StyledUploadDocumentDescription,
  StyledUploadDocumentLabel,
  StyledUploadDocumentWrapper,
  StyledUploadDragAndDropIconWrapper,
} from '../../styles/uploadDocument';
import UploadDragAndDropIcon from '@assets/icon/upload_drag_and_drop.svg';
import { IUploadDocument } from '@components/registration/types';

const UploadDocument: React.FC<IUploadDocument> = memo((props) => {
  const { label, description, type } = props;

  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const isValidFileType = (extension: string) => {
    const allowedExtensions = [...imageExtensions, ...documentExtensions];
    return allowedExtensions.includes(extension);
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    if (!fileExtension || !isValidFileType(fileExtension)) {
      showNotification(
        'error',
        'Invalid document type',
        'Please select a document in PDF, DOC, DOCX format or an image (JPEG, JPG, PNG).'
      );
      return;
    }

    reader.onloadend = async () => {
      const base64String = reader.result as string;

      let tempFile: TTempFileBody | null = null;

      switch (fileExtension) {
        case 'pdf':
          try {
            const convertedPicture = await convertPdfToImage(file);
            tempFile = { type, fileType: 'pdf', path: convertedPicture };
          } catch {
            showNotification(
              'error',
              'Error converting PDF',
              'There was an error converting the PDF to an image.'
            );
            return;
          }
          break;

        case 'png':
        case 'jpg':
        case 'jpeg':
          tempFile = { type, fileType: 'default', path: base64String };
          break;

        case 'doc':
        case 'docx':
          dispatch(setDocumentPath({ type, path: base64String }));
          break;
      }

      if (tempFile) {
        dispatch(setTempFilePath(tempFile));
        dispatch(toggleViewMode());
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <StyledUploadDocumentWrapper>
      <StyledUploadDocumentButton onClick={handleUploadButtonClick}>
        <StyledUploadDocumentContent>
          <StyledUploadDragAndDropIconWrapper>
            <UploadDragAndDropIcon />
          </StyledUploadDragAndDropIconWrapper>
          <StyledUploadDocumentLabel>{label}</StyledUploadDocumentLabel>
          <StyledUploadDocumentDescription>
            {description || 'Ensure document is clear and readable'}
          </StyledUploadDocumentDescription>
        </StyledUploadDocumentContent>
      </StyledUploadDocumentButton>
      <input
        type="file"
        hidden
        ref={fileInputRef}
        accept=".doc,.docx,.pdf,image/jpeg,image/jpg,image/png"
        onChange={handleFileChange}
      />
    </StyledUploadDocumentWrapper>
  );
});

UploadDocument.displayName = 'UploadDocument';

export default UploadDocument;
