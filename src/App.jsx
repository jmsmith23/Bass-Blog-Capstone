import { Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/drawer-app-bar/drawer-app-bar';
import LandingPage from './pages/landing-page/landing-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import TranscriptionPage from './pages/transcription-page/transcription-page';

const App = () => {
  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Transcriptions" element={<TranscriptionPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
