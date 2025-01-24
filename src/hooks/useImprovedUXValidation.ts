import { useState } from 'react';

const createInitialValues = (fields: string[]) => {
  return fields.reduce(
    (acc, cur) => {
      acc[cur] = 'onBlur';
      return acc;
    },
    {} as { [key: string]: string }
  );
};

export const useImprovedUXValidation = (fields: string[]) => {
  const [validationMode, setValidationMode] = useState<{
    [key: string]: string;
  }>(createInitialValues(fields));

  const changeValidationMode = (fieldName: string) => {
    setValidationMode((prevState) => ({
      ...prevState,
      [fieldName]: 'onChange',
    }));
  };

  const onFinishFailed = () => {
    const newValidationMode = Object.keys(validationMode).reduce(
      (obj, curr) => ({ ...obj, [curr]: 'onChange' }),
      {} as { email: string; password: string }
    );
    setValidationMode(newValidationMode);
  };

  const onBlur = (fieldName: string) => () => {
    changeValidationMode(fieldName);
  };

  return {
    validationMode,
    onFinishFailed,
    onBlur,
  };
};
