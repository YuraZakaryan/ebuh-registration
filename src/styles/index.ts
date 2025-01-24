import { Alert } from 'antd'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { TTheme } from './types'

const theme = {
	color: {
		primary: '#344054',
		button: {
			primary: '#0BA5EC',
		},
	},
} as TTheme

const StyledAlert = styled(Alert)`
	font-family: 'Poppins';
	font-weight: 400;
	background-color: #e6f4ff;
	border: 1px solid #91caff;
	max-height: 30px;
	font-size: 12px;
	margin-bottom: 14px;

	@media ${device.laptopMaxM} {
		margin: 22px 0 2px 0;
		font-size: 18px;
	}

	@media ${device.tabletMax} {
		margin: 22px 0 2px 0;
		font-size: 16px;
	}

	@media ${device.mobileMaxL} {
		margin: 16px 0 2px 0;
		font-size: 14px;
	}
`

export { StyledAlert, theme }
