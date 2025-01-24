import { Button } from 'antd'
import styled from 'styled-components'
import { device } from '@constants/index.ts'

const StyledUploadDocumentButton = styled.button`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border: none;
	cursor: pointer;
	background-color: inherit;

	& > :hover {
		opacity: 0.85;
	}
`

const StyledUploadDocumentWrapper = styled.div`
	margin: 48px auto;
	width: 472px;
	height: 188px;
	background-color: #00000005;

	@media ${device.laptopMax} {
		margin: 8px auto;
		margin-bottom: 0;
		width: 100%;
		padding: 10.5px 5px;
	}
`

const StyledUploadDocumentContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 16px;
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	width: 412px;
	background-color: #00000005;

	@media ${device.mobileMinL} {
		max-height: 140px;
	}
`

const StyledUploadDragAndDropIconWrapper = styled.div`
	@media ${device.mobileMaxL} {
	}
`

const StyledUploadDocumentLabel = styled.h3`
	text-align: center;
	font-size: 16px;
	font-weight: 500;
	margin-top: 10px;
	line-height: 22px;
	color: ${props => props.theme.color.primary};

	@media ${device.mobileMaxL} {
		font-size: 14px;
		line-height: 18px;
		max-width: 230px;
	}
`

const StyledUploadDocumentDescription = styled.p`
	text-align: center;
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: #00000073;

	@media ${device.mobileMaxL} {
		max-width: 230px;
	}
`

const StyledBackButton = styled(Button).attrs({
	type: 'text',
	iconPosition: 'start',
})`
	color: ${props => props.theme.color.primary};
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	border-radius: 8px;

	@media ${device.mobileMaxL} {
		margin-top: 16px;
		padding: 4px 16px;
	}
`

const StyledNextButton = styled(Button).attrs({
	type: 'primary',
})`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	border-radius: 8px;
	background: ${props => props.theme.color.button.primary};

	@media ${device.laptopMaxM} {
		font-size: 16px;
		padding: 4px 16px;
	}

	@media ${device.mobileMaxL} {
		margin-top: 16px;
		padding: 4px 16px;
	}
`

const StyledCancelButton = styled(Button)`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	color: ${props => props.theme.color.primary};
	border-radius: 8px;
`

export {
	StyledBackButton,
	StyledCancelButton,
	StyledNextButton,
	StyledUploadDocumentButton,
	StyledUploadDocumentContent,
	StyledUploadDocumentDescription,
	StyledUploadDocumentLabel,
	StyledUploadDocumentWrapper,
	StyledUploadDragAndDropIconWrapper,
}
