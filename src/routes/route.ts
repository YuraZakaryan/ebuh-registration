import React from 'react'
import { TPageRoute } from '../types'

const Registration = React.lazy(() => import('../pages/registration'))
const Home = React.lazy(() => import('../pages'))

export const getPages = (): TPageRoute[] => {
	return [
		{
			path: '/',
			Component: Home,
		},
		{
			path: '/registration',
			Component: Registration,
		},
	]
}
