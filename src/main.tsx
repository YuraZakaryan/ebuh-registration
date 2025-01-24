import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import './index.css'
import { store } from './store/index.ts'
import { theme } from './styles/index.ts'
createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store()}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
)
