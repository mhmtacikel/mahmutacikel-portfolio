import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeLangProvider } from './contexts/ThemeLangContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeLangProvider>
      <App />
    </ThemeLangProvider>
  </StrictMode>,
);
