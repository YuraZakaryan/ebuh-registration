import { memo } from 'react'
import { ILinkButtonProps } from '../../../../types'
import { StyledExistDocumentButton } from '../../styles'
import LinkIcon from './../../../../../../assets/icon/link.svg'

export const LinkButton: React.FC<ILinkButtonProps> = memo(props => {
	const { onClick, children } = props
	return (
		<StyledExistDocumentButton
			icon={<LinkIcon />}
			iconPosition='start'
			onClick={() => onClick('front')}
		>
			{children}
		</StyledExistDocumentButton>
	)
})

LinkButton.displayName = 'LinkButton'
