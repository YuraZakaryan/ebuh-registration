import React, { memo } from 'react'
import {StyledAuthWrapper} from "@layouts/auth/styles";
import {IAuthLayoutProps} from "@layouts/auth/types";

const AuthIntro = React.lazy(() => import('@layouts/auth/components/intro'))
const AuthContent = React.lazy(() => import('@layouts/auth/components/content/'))

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
