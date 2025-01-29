import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { store } from '@store';
import { theme } from '@constants/theme';
import './index.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
