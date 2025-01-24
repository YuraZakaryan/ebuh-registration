import { Button, Checkbox, Form, FormProps, Input, Select, Steps } from 'antd'
import styled from 'styled-components'
import { device } from '../../../utils/constants'
import { TRegistrationFormValues } from '../types'

const StyledRegistrationForm = styled(Form)<FormProps<TRegistrationFormValues>>`
	display: flex;
	flex-direction: column;
	width: 100%;
`
const StyledRegistrationFormItem = styled(Form.Item)`
	width: 100%;

	& label {
		font-family: 'Poppins' !important;
		font-weight: 400;
		font-size: 16px;
	}

	@media ${device.laptopMaxM} {
		margin: 0;
		margin-top: 24px;

		& label {
			font-size: 18px !important;
		}
	}

	@media ${device.mobileMaxL} {
		margin: 0;
		margin-top: 8px;
	}
`

const StyledTextField = styled(Input)`
	height: 38px;

	@media ${device.laptopMaxM} {
		height: 40px;

		&::placeholder {
			font-size: 16px;
			line-height: 24px;
		}
	}
`

const StyledRoleSelect = styled(Select)``
const StyledDocumentTypeSelect = styled(Select)``

const StyledRegistrationFormItemsWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media ${device.tabletMin} {
		flex-direction: row;
		gap: 10px;
	}
`

const StyledUploadButton = styled(Button)`
	font-family: 'Poppins';
	font-weight: 400;
	font-size: 14px;
	max-height: 40px;
	padding: 20px 16px;
	background-color: #ffffff;
	border: 1px solid #d0d5dd;
	border-radius: 8px;
	line-height: 18px;

	@media ${device.laptopMaxM} {
		width: 195px;
		height: 40px;
		padding: 0;
		font-size: 16px;
		line-height: 24px;
	}

	@media ${device.mobileMaxL} {
		width: 143px;
		height: 32px;
		font-size: 14px;
		padding: 0;
	}
`

const StyledPrivacyCheckbox = styled(Checkbox)`
	font-family: 'Poppins' !important;
	font-weight: 400;
	font-size: 14px;

	@media ${device.laptopMaxM} {
		margin-top: 24px;
	}
`

const StyledPrivacyText = styled.p`
	padding-left: 10px;
	font-size: 14px;

	@media ${device.laptopMaxM} {
		font-size: 18px;
	}

	@media ${device.tabletMax} {
		font-size: 16px;
	}
`

const StyledPrivacyCheckboxSpecialText = styled.span`
	color: #0ba5ec;
	padding-left: 4px;
`

const StyledReCaptchaWrapper = styled.div`
	margin-top: 16px;
	padding-left: 16px;

	@media ${device.tabletMax} {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 33px;
	}

	@media ${device.mobileMaxL} {
		width: 100%;
		margin-top: 12px;
		padding-left: 0;
	}
`

const StyledSubmitFormButton = styled(Button)`
	font-family: 'Poppins' !important;
	font-weight: 400;
	background-color: #0ba5ec;
	padding: 20px 0;
	color: #fcfcfd;
	border-radius: 24px;
	margin-top: 24px;

	@media ${device.laptopMaxM} {
		font-size: 18px;
	}

	@media ${device.mobileMaxL} {
		font-size: 14px;
	}
`

const StyledStepContentWrapper = styled.div`
	width: 100%;
`

const StyledSteps = styled(Steps)`
	& .ant-steps-item-finish {
		& .ant-steps-item-icon {
			background: ${props => props.theme.color.button.primary} !important;

			svg {
				color: white;
			}
		}
	}

	& .ant-steps-item-active {
		& .ant-steps-item-icon {
			svg {
				color: white;
			}
		}

		& .ant-steps-item-title {
			color: black !important;
		}
	}

	@media ${device.tabletMax} {
		& .ant-steps-item-title {
			line-height: 15px;
		}
	}
`

export {
	StyledDocumentTypeSelect,
	StyledPrivacyCheckbox,
	StyledPrivacyCheckboxSpecialText,
	StyledPrivacyText,
	StyledReCaptchaWrapper,
	StyledRegistrationForm,
	StyledRegistrationFormItem,
	StyledRegistrationFormItemsWrapper,
	StyledRoleSelect,
	StyledStepContentWrapper,
	StyledSteps,
	StyledSubmitFormButton,
	StyledTextField,
	StyledUploadButton,
}
