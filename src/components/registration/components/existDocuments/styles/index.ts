import { Button } from 'antd'
import styled from 'styled-components'

const StyledExistDocumentsWrapper = styled.div`
	display: flex;
	align-items: center;
`

const StyledExistDocumentButton = styled(Button)`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	color: #0ba5ec;
	margin-left: 12px;
	padding: 0;
	border: none;
	border-radius: 8px;
`

export { StyledExistDocumentButton, StyledExistDocumentsWrapper }
