import styled from 'styled-components'

const StyledHeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`

const StyledDefaultLayoutTitle = styled.h1`
	font-size: 26px;
	font-weight: 600;
	text-transform: capitalize;
	margin-right: 11px;
`

const StyledDefaultLayoutIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #d0d5dd;
	width: 14px;
	height: 14px;
`

const StyledBradCrumbIcon = styled.div`
	color: ${props => props.theme.color.primary};
	width: 14px;
	height: 14px;
`

export {
	StyledBradCrumbIcon,
	StyledDefaultLayoutIcon,
	StyledDefaultLayoutTitle,
	StyledHeaderWrapper,
}
