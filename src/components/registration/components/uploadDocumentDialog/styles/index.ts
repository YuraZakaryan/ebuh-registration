import { Button, Image, Modal } from 'antd'
import styled from 'styled-components'
import { device } from '../../../../../utils/constants'

const StyledUploadDialog = styled(Modal)`
	& .ant-modal-header {
		margin-bottom: 24px;

		& > .ant-modal-title {
			font-family: 'Poppins', Arial, Helvetica, sans-serif;
			color: ${props => props.theme.color.primary};
			font-weight: 500;
			font-size: 16px;
			line-height: 22px;
		}
	}

	@media ${device.mobileMaxL} {
		& .ant-modal-content {
			padding: 16px 8px;
		}
	}
`

const StyledModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 5px;
	width: 100%;
`

const StyledDocumentShowWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
	overflow: hidden;
`

const StyledDocumentContainer = styled.div`
	position: relative;
	border: 1px solid #d0d5dd;
	border-radius: 8px;
`

const StyledShowDocument = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	width: 208px;
	height: 208px;
	padding: 16px;

	& svg {
		width: 110px;
		height: 110px;
		color: ${props => props.theme.color.primary};
	}
`

const StyledShowDocumentText = styled.p`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-size: 20px;
	margin-top: 10px;
	text-align: center;
	color: ${props => props.theme.color.primary};
`

const StyledShowImage = styled(Image)`
	background-position: center;
	object-fit: cover;
	cursor: pointer;
	width: 100%;
	height: 100%;
	padding: 16px;
`

const StyledDocumentCover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 16px;
	font-weight: bold;
	border-radius: 8px;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;

	&:hover {
		opacity: 1;
	}
`

const StyledDocumentActionButton = styled(Button).attrs({
	type: 'text',
})`
	margin-left: 8px;

	svg {
		width: 28px;
		height: 28px;
	}
`

export {
	StyledDocumentActionButton,
	StyledDocumentContainer,
	StyledDocumentCover,
	StyledDocumentShowWrapper,
	StyledModalFooter,
	StyledShowDocument,
	StyledShowDocumentText,
	StyledShowImage,
	StyledUploadDialog,
}
