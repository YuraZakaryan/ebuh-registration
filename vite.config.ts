import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import path from "path";

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
	resolve: {
		alias: {
			'@': path.resolve(__dirname, "./src/"),
			'@pages': path.resolve(__dirname, "./src/pages/"),
			'@components': path.resolve(__dirname, "./src/components/"),
			'@layouts': path.resolve(__dirname, "./src/components/layouts/"),
			'@assets': path.resolve(__dirname, "./src/assets/"),
			'@hooks': path.resolve(__dirname, "./src/hooks/"),
			'@store': path.resolve(__dirname, "./src/store/"),
			'@styles': path.resolve(__dirname, "./src/components/styles/"),
			'@types': path.resolve(__dirname, "./src/types/"),
			'@services': path.resolve(__dirname, "./src/services/"),
			'@schema': path.resolve(__dirname, "./src/schema/"),
			'@routes': path.resolve(__dirname, "./src/routes/"),
			"@constants": path.resolve(__dirname, "./src/utils/constants/"),
		},
	},
	optimizeDeps: {
		exclude: ['pdfjs-dist', '@cyntler/react-doc-viewer'],
	},
	server: {
		port: 3000,
	},
})
