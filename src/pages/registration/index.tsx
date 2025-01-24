import { CheckboxProps, Form } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { Helmet } from 'react-helmet'
import { ExistDocuments } from '@components/registration/components/existDocuments'
import { SuccessRegistration } from '@components/registration/components/successRegistration'
import { UploadDocumentDialog } from '@components/registration/components/uploadDocumentDialog'
import {
	StyledPrivacyCheckbox,
	StyledPrivacyCheckboxSpecialText,
	StyledPrivacyText,
	StyledReCaptchaWrapper,
	StyledRegistrationForm,
	StyledRegistrationFormItem,
	StyledRegistrationFormItemsWrapper,
	StyledSubmitFormButton,
	StyledTextField,
	StyledUploadButton,
} from '@components/registration/styles'
import { TRegistrationFormValues } from '@components/registration/types'
import {StyledAlert, StyledSelect} from '@styles'
import { useAppDispatch, useAppSelector } from '@hooks/redux.ts'
import { useImprovedUXValidation } from '@hooks/useImprovedUXValidation.ts'
import { useNotification } from '@hooks/useNotification.ts'
import { registrationSchema, yupValidator } from '@schema/registration'
import { registrationThunk } from '@store/api/registrationThunk.ts'
import { clearPaths, setIsModalOpen } from '@store/reducer/fileSlice.ts'
import { EDocumentType } from '@store/types/file'
import { ERole } from '@store/types/user'
import SelectIcon from '@assets/icon/icon-select.svg'
import UploadIcon from '@assets/icon/upload_icon.svg'

const AuthLayout = React.lazy(() => import('@components/layouts/auth'))

const Registration = () => {
	const dispatch = useAppDispatch()
	const { paths } = useAppSelector(state => state.file)
	const { registration, user } = useAppSelector(state => state.user)
	const { onFinishFailed, validationMode, onBlur } = useImprovedUXValidation([
		'email',
		'firstName',
		'lastName',
		'role',
		'documentType',
		'documentNumber',
	])
	const [isVerified, setIsVerified] = useState<boolean>(false)
	const [isPrivacy, setIsPrivacy] = useState<boolean>(false)
	const [form] = Form.useForm()

	const { showNotification } = useNotification()
	const yupSync = yupValidator(registrationSchema, form.getFieldsValue)

	const initialValues: TRegistrationFormValues = {
		email: '',
		firstName: '',
		lastName: '',
		role: null,
		documentType: null,
		documentNumber: '',
		documents: {
			front: '',
			back: '',
			selfie: '',
		},
	}

	useEffect(() => {
		if (paths) {
			form.setFieldsValue({
				documents: {
					front: paths.front || '',
					back: paths.back || '',
					selfie: paths.selfie || '',
				},
			})
		}
	}, [paths, form])

	const roles = useMemo(
		() =>
			Object.values(ERole).map(role => ({
				label: role,
				value: role,
			})),
		[]
	)

	const documentTypes = useMemo(
		() =>
			Object.values(EDocumentType).map(type => ({
				label: type,
				value: type,
			})),
		[]
	)

	const onCheckboxChange: CheckboxProps['onChange'] = e => {
		setIsPrivacy(e.target.checked)
	}

	const handleReCAPTCHAChange = (token: string | null) => {
		if (token) {
			setIsVerified(true)
		} else {
			setIsVerified(false)
		}
	}

	const openModal = () => {
		dispatch(setIsModalOpen({ open: true }))
	}

	const hasNonEmptyPath = useMemo(() => {
		return Object.values(paths).some(path => path !== '')
	}, [paths])

	const onSubmit = async () => {
		try {
			const values = await form.validateFields()

			dispatch(registrationThunk(values))
				.unwrap()
				.then(res => {
					if (res) {
						showNotification(
							'success',
							'Registration Successful!',
							'Your account has been successfully created.'
						)

						form.resetFields()
						dispatch(clearPaths())
					}
				})
				.catch(() => {
					showNotification(
						'error',
						'Registration Error',
						'An error occurred during registration. Please try again.'
					)
				})
		} catch (error) {
			console.log('Validation Failed:', error)
		}
	}

	const isLoading = registration.isLoading
	const isDisable = !isVerified || !isPrivacy || isLoading || false
	const isSuccess = !!user

	return (
		<>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			{isSuccess ? (
				<AuthLayout title='Thank you!'>
					<SuccessRegistration />
				</AuthLayout>
			) : (
				<>
					<AuthLayout title='Welcome to EBUH!'>
						<StyledRegistrationForm
							form={form}
							initialValues={initialValues}
							layout='vertical'
							autoComplete='off'
							validateTrigger={['onChange', 'onBlur']}
							onFinish={onSubmit}
							onFinishFailed={onFinishFailed}
						>
							<StyledRegistrationFormItem
								name='email'
								label='Email address'
								rules={[yupSync]}
								validateTrigger={validationMode.email}
								required
							>
								<StyledTextField
									placeholder='example'
									onBlur={onBlur('email')}
								/>
							</StyledRegistrationFormItem>
							<StyledRegistrationFormItemsWrapper>
								<StyledRegistrationFormItem
									name='firstName'
									label='First Name'
									rules={[yupSync]}
									validateTrigger={validationMode.firstName}
									required
								>
									<StyledTextField
										placeholder='example'
										onBlur={onBlur('firstName')}
									/>
								</StyledRegistrationFormItem>
								<StyledRegistrationFormItem
									name='lastName'
									label='Last Name'
									rules={[yupSync]}
									validateTrigger={validationMode.lastName}
									required
								>
									<StyledTextField
										placeholder='example'
										onBlur={onBlur('lastName')}
									/>
								</StyledRegistrationFormItem>
							</StyledRegistrationFormItemsWrapper>
							<StyledRegistrationFormItem
								name='role'
								label='Role'
								rules={[yupSync]}
								validateTrigger={validationMode.role}
								required
							>
								<StyledSelect
									options={roles}
									suffixIcon={<SelectIcon />}
									onBlur={onBlur('role')}
									placeholder='Choose role'
								/>
							</StyledRegistrationFormItem>
							<StyledRegistrationFormItemsWrapper>
								<StyledRegistrationFormItem
									name='documentType'
									label='Document type'
									rules={[yupSync]}
									validateTrigger={validationMode.documentType}
									required
								>
									<StyledSelect
										options={documentTypes}
										suffixIcon={<SelectIcon />}
										onBlur={onBlur('documentType')}
										placeholder='Choose type'
									/>
								</StyledRegistrationFormItem>
								<StyledRegistrationFormItem
									name='documentNumber'
									label='Document number'
									rules={[yupSync]}
									validateTrigger={validationMode.documentNumber}
									required
								>
									<StyledTextField
										placeholder='example'
										onBlur={onBlur('documentNumber')}
									/>
								</StyledRegistrationFormItem>
							</StyledRegistrationFormItemsWrapper>
							<StyledAlert message='Lorem Ipsum' type='info' showIcon />
							<StyledRegistrationFormItem
								name='documents'
								label='Upload document'
								rules={[yupSync]}
								required
							>
								{hasNonEmptyPath ? (
									<ExistDocuments />
								) : (
									<StyledUploadButton icon={<UploadIcon />} onClick={openModal}>
										Upload photo
									</StyledUploadButton>
								)}
							</StyledRegistrationFormItem>
							<StyledPrivacyCheckbox onChange={onCheckboxChange}>
								<StyledPrivacyText>
									I’ve read and agree to
									<StyledPrivacyCheckboxSpecialText>
										Privacy Policy
									</StyledPrivacyCheckboxSpecialText>
								</StyledPrivacyText>
							</StyledPrivacyCheckbox>
							<StyledReCaptchaWrapper>
								<ReCAPTCHA
									sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
									onChange={handleReCAPTCHAChange}
								/>
							</StyledReCaptchaWrapper>
							<StyledSubmitFormButton
								disabled={isDisable}
								loading={isLoading ?? false}
								htmlType='submit'
							>
								Send Request
							</StyledSubmitFormButton>
						</StyledRegistrationForm>
						<UploadDocumentDialog />
					</AuthLayout>
				</>
			)}
		</>
	)
}

export default Registration
