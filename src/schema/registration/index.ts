import * as yup from 'yup';
import { ERole, EDocumentType } from '@store/types';

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Invalid email format')
    .min(5, 'Email must be at least 5 characters long')
    .max(255, 'Email must not exceed 255 characters'),
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Z]+$/, 'First name must contain only Latin letters')
    .min(2, 'First name must be at least 2 characters long')
    .max(255, 'First name must not exceed 255 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Z]+$/, 'Last name must contain only Latin letters')
    .min(2, 'Last name must be at least 2 characters long')
    .max(255, 'Last name must not exceed 255 characters'),
  role: yup
    .mixed<ERole>()
    .required('Role is required')
    .oneOf(
      [ERole.ADMINISTRATOR, ERole.EDUCATOR, ERole.PARENT, ERole.STUDENT],
      'Invalid role selected'
    ),
  documentType: yup
    .mixed<EDocumentType>()
    .required('Document type is required')
    .oneOf(
      [EDocumentType.PASSPORT, EDocumentType.ID, EDocumentType.SOCIAL_CARD],
      'Invalid document type'
    ),
  documentNumber: yup
    .string()
    .required('Document number is required')
    .matches(/^\d+$/, 'Document number must contain only digits')
    .min(2, 'Document number must be at least 2 characters')
    .max(150, 'Document number must be no more than 150 characters'),

  documents: yup
    .object()
    .shape({
      front: yup.string().required(),
      back: yup.string().required(),
      selfie: yup.string().required(),
    })
    .test('documents-complete', 'All documents must be uploaded', (value) => {
      return value?.front && value?.back && value?.selfie
        ? true
        : new yup.ValidationError('All documents must be uploaded');
    }),
});

const addTranslationSchema = yup.object().shape({
  english: yup
    .string()
    .required('English translation is required')
    .min(1, 'English translation cannot be empty'),
});

const yupValidator = <T extends yup.AnyObject>(
  schema: yup.ObjectSchema<T>,
  getFieldsValue: () => T
) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validator({ field }: any) {
    await schema.validateSyncAt(field, getFieldsValue());
  },
});

export { registrationSchema, addTranslationSchema, yupValidator };
