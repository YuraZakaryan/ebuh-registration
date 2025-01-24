import { Button, Slider } from 'antd'
import styled from 'styled-components'
import { device } from '@constants/index.ts'

const StyledModificationWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const StyledCropperWrapper = styled.section`
	position: relative;
	height: 380px;
	width: 100%;
`

const StyledCropperToolsWrapper = styled.section`
	width: 100%;
	margin: 0 auto;
	padding: 0 128px;
	margin-top: 24px;

	@media ${device.laptopMax} {
		padding: 10px 0;
	}
`

const StyledToolIconWrapper = styled(Button)`
	border: none;
	padding: 0;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const StyledSlider = styled(Slider)`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 0 3px;
`

const StyledToolContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export {
	StyledCropperToolsWrapper,
	StyledCropperWrapper,
	StyledModificationWrapper,
	StyledSlider,
	StyledToolContent,
	StyledToolIconWrapper,
}
