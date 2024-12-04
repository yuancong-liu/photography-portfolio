import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/home/index.tsx';
import { MapPage } from './pages/map/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
