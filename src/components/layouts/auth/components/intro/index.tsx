import {
	StyledAuthIntro,
	StyledAuthIntroContent,
	StyledAuthIntroLogo,
	StyledAuthIntroSpecialText,
	StyledAuthIntroText,
	StyledAuthIntroWrapper,
	StyledIntroLine,
} from '../../styles'
import Logo from './../../../../../assets/logo/logo.png'

const AuthIntro = () => {
	return (
		<StyledAuthIntro>
			<StyledIntroLine />
			<StyledAuthIntroWrapper>
				<StyledAuthIntroContent>
					<StyledAuthIntroText>
						<StyledAuthIntroLogo src={Logo} />
						<span>Your Engine for Excellence,</span>
					</StyledAuthIntroText>
					<StyledAuthIntroSpecialText>
						Your Catalyst for Success
					</StyledAuthIntroSpecialText>
				</StyledAuthIntroContent>
			</StyledAuthIntroWrapper>
		</StyledAuthIntro>
	)
}

export default AuthIntro
