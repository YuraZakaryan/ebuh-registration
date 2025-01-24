import { FormProps, Select } from 'antd'
import styled from 'styled-components'
import { device } from '../../../../utils/constants'

const StyledAuthWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	background: linear-gradient(90deg, #31b3ef 0%, #31b3ef 0.01%, #91d5f5 100%);

	@media ${device.laptopMaxM} {
		flex-direction: column;
	}
`

const StyledAuthContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 100%;
	background-color: #ffffff;
	border: 1px solid #ffffff;
	border-radius: 85px 0 0 85px;
	font-family: 'Poppins', Arial, Helvetica, sans-serif;

	@media ${device.laptopMaxM} {
		border-radius: 35px 35px 0 0;
		padding: 30px 50px 10px 50px;
		flex: 1;
	}

	@media ${device.laptopMaxM} {
		padding: 16px;
	}
`

const StyledAuthIntro = styled.div`
	display: flex;
	width: 100%;

	@media ${device.laptopMaxM} {
		flex-direction: column;
	}
`
const StyledAuthIntroWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	padding-left: 85.57px;

	@media ${device.laptopMaxM} {
		margin: 44px 0 44px 49px;
		padding: 0;
		max-width: 440px;
	}

	@media ${device.tabletMax} {
		margin: 33px 0 33px 49px;
		padding: 0;
		max-width: 388px;
	}

	@media ${device.mobileMaxL} {
		margin: 22px 0 26px 16px;
		padding: 0;
		max-width: 211.48px;
	}
`
const StyledAuthIntroContent = styled.div`
	display: flex;
	flex-direction: column;
	color: #ffffff;
	font-size: 72.27px;
	font-family: 'Baloo Tammudu 2', Arial, Helvetica, sans-serif;
	line-height: 65px;
	font-weight: 900;
	width: 509px;

	@media ${device.laptopMaxM} {
		font-size: 56px;
		line-height: 56px;
	}

	@media ${device.tabletMax} {
		font-size: 48px;
		line-height: 48px;
	}

	@media ${device.mobileMaxL} {
		font-size: 30px;
		line-height: 26.98px;
	}
`

const StyledAuthIntroText = styled.div`
	font-size: inherit;
	color: inherit;
	vertical-align: middle;
`

const StyledAuthIntroLogo = styled.img`
	width: 67.99px;
	height: 50.25px;
	margin-right: 15px;

	@media ${device.laptopMaxM} {
		margin-right: 10px;
		width: 49.73px;
		height: 37.13px;
	}

	@media ${device.tabletMax} {
		margin-right: 10px;
	}

	@media ${device.mobileMaxL} {
		width: 28.22px;
		height: 21.07px;
	}
`

const StyledAuthIntroSpecialText = styled.span`
	color: #344054;
`

const StyledIntroLine = styled.div`
	height: 100%;
	width: 64.43px;
	background-color: #85d2f5;
	backdrop-filter: blur(14.208148956298828px);
	box-shadow: 0px 0px 9.57px 0px #00000040;

	@media ${device.laptopMaxM} {
		height: 26px;
		width: 100%;
	}

	@media ${device.tabletMax} {
		height: 16px;
	}
`

const StyledAuthHeader = styled.header`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	top: 50px;
	right: 100px;

	@media ${device.laptopMaxM} {
		top: 25px;
		right: 50px;
		padding: 0;
	}

	@media ${device.mobileMaxXL} {
		top: 17px;
		right: 16px;
	}

	@media ${device.mobileMaxL} {
		position: relative;
		top: 0;
		right: 0;
		margin-bottom: 26px;
	}
`

const StyledLanguageSelect = styled(Select)<FormProps>`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	color: ${props => props.theme.color.primary};
	padding: 5px 16px, 5px, 16px;
	min-width: 155px;

	& > .ant-select-selector {
		border: none !important;
		font-size: 15px;
		border-radius: 2px;

		background-color: transparent;
		box-shadow: none;
		&:hover {
			background-color: #ebebef !important;
		}
	}

	@media ${device.laptopMaxM} {
		min-width: 140px;
		& > .ant-select-selector {
			font-size: 14px;
		}
	}
`

const StyledAuthMain = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ${device.laptopMinM} {
		margin: 0 auto;
		padding-top: 83px;
		max-width: 445px;
	}
`

const StyledMainLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 226px;
	height: 99px;

	@media ${device.tabletMax} {
		width: 113px;
		height: 50px;
	}

	@media ${device.mobileMaxL} {
		width: 95.2px;
		height: 24.01px;
		margin-bottom: 1.66px;
	}
`

const StyledAuthTitle = styled.h1`
	font-size: 48px;
	text-align: center;
	white-space: nowrap;
	color: ${props => props.theme.color.primary};
	font-weight: 400px;

	@media ${device.laptopMax} {
		font-size: 34px;
		font-weight: 600px;
		margin-bottom: 19px;
	}

	@media ${device.tabletMax} {
		font-size: 32px;
		font-weight: 600px;
		line-height: 40px;
		margin-bottom: 24px;
	}

	@media ${device.mobileMaxL} {
		font-size: 26px;
		font-weight: 600px;
	}
`

const StyledFormWrapper = styled.div`
	width: 100%;
`

const StyledPrivacyMessage = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 46px 50px 20px 0;
	width: 100%;

	@media ${device.tabletMax} {
		justify-content: center;
		padding: 24px 0 0 0;
	}
`

const StyledPrivacyMessageText = styled.p`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 14px;
	font-size: 14px;
	color: #98a2b3;
	font-weight: 400;

	@media ${device.mobileMaxL} {
		font-size: 14.18px;
		line-height: 18.24px;
	}
`
export {
	StyledAuthContent,
	StyledAuthHeader,
	StyledAuthIntro,
	StyledAuthIntroContent,
	StyledAuthIntroLogo,
	StyledAuthIntroSpecialText,
	StyledAuthIntroText,
	StyledAuthIntroWrapper,
	StyledAuthMain,
	StyledAuthTitle,
	StyledAuthWrapper,
	StyledFormWrapper,
	StyledIntroLine,
	StyledLanguageSelect,
	StyledMainLogo,
	StyledPrivacyMessage,
	StyledPrivacyMessageText,
}
