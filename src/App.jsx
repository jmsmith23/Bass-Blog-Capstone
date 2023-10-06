import { Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/drawer-app-bar/drawer-app-bar';
import LandingPage from './pages/landing-page/landing-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import LoginPage from './pages/login-page/login-page';
import TranscriptionPage from './pages/transcription-page/transcription-page';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/transcriptions" element={<TranscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
