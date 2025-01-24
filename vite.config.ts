import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				exportType: 'default',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: '**/*.svg',
		}),
	],
	optimizeDeps: {
		exclude: ['pdfjs-dist', '@cyntler/react-doc-viewer'],
	},
	server: {
		port: 3000,
	},
})
