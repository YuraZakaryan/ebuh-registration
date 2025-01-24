import { Button } from 'antd'
import styled from 'styled-components'
import { device } from '../../../../../utils/constants'

const StyledSuccessMessageWrapper = styled.div`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${device.mobileMinL} {
		margin-top: 40px;
	}
`

const StyledSuccessIconWrapper = styled.div`
	@media ${device.mobileMaxL} {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
	}
`

const StyledSuccessMessage = styled.p`
	text-align: center;
	font-size: 14px;
	line-height: 18px;
	color: #838383;
	margin: 18px 0 19px 0;
	max-width: 300px;
`

const StyledSuccessBackButton = styled(Button)`
	font-weight: 500;
	text-align: center;
	font-size: 16px;
	line-height: 22px;
	color: #36bffa;
	border: none;
	background: transparent !important;
	box-shadow: none;

	& > .ant-btn-icon {
		display: flex;
		align-items: center;
	}
`

export {
	StyledSuccessBackButton,
	StyledSuccessIconWrapper,
	StyledSuccessMessage,
	StyledSuccessMessageWrapper,
}
