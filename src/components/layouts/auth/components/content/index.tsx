import React, { memo } from 'react'
import { DateService } from '../../../../../services/date'
import {
	StyledAuthContent,
	StyledAuthHeader,
	StyledAuthMain,
	StyledAuthTitle,
	StyledFormWrapper,
	StyledLanguageSelect,
	StyledMainLogo,
	StyledPrivacyMessage,
	StyledPrivacyMessageText,
} from '../../styles'
import { IAuthContentProps } from '../../types'
import SelectIcon from './../../../../../assets/icon/icon-select.svg'
import FullLogo from './../../../../../assets/logo/logo_full.svg'

const AuthContent: React.FC<IAuthContentProps> = memo(props => {
	const { title, children } = props

	return (
		<StyledAuthContent>
			<StyledAuthHeader>
				<StyledLanguageSelect
					defaultValue='am'
					suffixIcon={<SelectIcon />}
					options={[
						{ value: 'am', label: 'Armenian (AM)' },
						{ value: 'ru', label: 'Russian (RU)' },
						{ value: 'en', label: 'English (UK)' },
					]}
				/>
			</StyledAuthHeader>
			<StyledAuthMain>
				<StyledMainLogo>
					<FullLogo />
				</StyledMainLogo>
				<StyledAuthTitle>{title || 'Welcome to EBUH!'}</StyledAuthTitle>
				<StyledFormWrapper>{children}</StyledFormWrapper>
			</StyledAuthMain>
			<StyledPrivacyMessage>
				<StyledPrivacyMessageText>
					© {DateService.getCurrentYear()} EBUH All Rights Reserved
				</StyledPrivacyMessageText>
			</StyledPrivacyMessage>
		</StyledAuthContent>
	)
})

AuthContent.displayName = 'AuthContent'

export default AuthContent
