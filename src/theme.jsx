import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#e57373',
      main: '#ef5350',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
  },
});

export default theme;
