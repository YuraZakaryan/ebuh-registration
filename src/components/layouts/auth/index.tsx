import React, { memo } from 'react'
import { StyledAuthWrapper } from './styles'
import { IAuthLayoutProps } from './types'

const AuthIntro = React.lazy(() => import('./components/intro'))
const AuthContent = React.lazy(() => import('./components/content/'))

const AuthLayout: React.FC<IAuthLayoutProps> = memo(props => {
	const { title, children } = props

	return (
		<StyledAuthWrapper>
			<AuthIntro />
			<AuthContent title={title}>{children}</AuthContent>
		</StyledAuthWrapper>
	)
})

AuthLayout.displayName = 'AuthLayout'
export default AuthLayout
