import { FormProps, Select } from 'antd'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { device } from '../../utils/constants'

const StyledLoaderWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`

const StyledLoader = styled(ClipLoader)`
	border-width: 20px;
`

const StyledSelect = styled(Select)<FormProps>`
	font-family: 'Poppins', Arial, Helvetica, sans-serif;
	font-weight: 400;
	color: #98a2b3;
	min-width: 92px;
	height: 38px;

	@media ${device.laptopMaxM} {
		height: 40px;
	}

	& > .ant-select-arrow {
		filter: invert(67%) sepia(17%) saturate(265%) hue-rotate(179deg)
			brightness(93%) contrast(90%);
	}

	& .ant-select-selection-item {
		display: flex !important;
		align-items: center;
		text-transform: capitalize;

		@media ${device.laptopMaxM} {
			height: 40px;
		}
	}
`

export { StyledLoader, StyledLoaderWrapper, StyledSelect }
