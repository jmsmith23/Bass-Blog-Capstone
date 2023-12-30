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
import { useState, useEffect } from 'react';
import { getCurrentUser } from './api/auth';
import LogoutPage from './pages/logout-page/logout-page';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // console.log('user: ', currentUser);

  // TODO: Get the current user from the back-end when the page loads
  useEffect(() => {
    (async () => {
      setCurrentUser(await getCurrentUser());
    })();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar user={currentUser} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/transcriptions" element={<TranscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignupPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/logout"
            element={
              <LogoutPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
