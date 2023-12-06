import { Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/drawer-app-bar/drawer-app-bar';
import LandingPage from './pages/landing-page/landing-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import LoginPage from './pages/login-page/login-page';
import SignupPage from './pages/signup-page/signup-page';
import TranscriptionPage from './pages/transcription-page/transcription-page';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useState } from 'react';

const App = () => {
  // TODO: Get thecurrent user from the back-end when the page loads
  const [user, setUser] = useState(null);

  console.log('user: ', user);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar user={user} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/transcriptions" element={<TranscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<SignupPage user={user} />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
