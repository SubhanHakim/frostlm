import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { TerminalPage } from './pages/TerminalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terminal" element={<TerminalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
