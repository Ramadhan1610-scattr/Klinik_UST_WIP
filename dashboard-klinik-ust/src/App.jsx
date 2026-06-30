import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import DokterPage from './pages/DokterPage';
import KasirPage from './pages/KasirPage';
import KepalaKlinikPage from './pages/KepalaKlinikPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dokter" element={<DokterPage />} />
        <Route path="/kasir" element={<KasirPage />} />
        <Route path="/kepala-klinik" element={<KepalaKlinikPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
