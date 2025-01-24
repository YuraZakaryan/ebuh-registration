import React from 'react'

export type TPageRoute = {
	path: string
	Component: React.LazyExoticComponent<React.FC>
}

export type TCrop = {
	x: number
	y: number
	width: number
	height: number
}

export type TNotificationType = 'success' | 'info' | 'warning' | 'error'

export type TSVGProps = {
	color: string
}
