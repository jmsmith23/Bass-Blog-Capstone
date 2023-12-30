import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar/sidebar';
import SearchBar from '../searchbar/searchbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const drawerWidth = 240;

function DrawerAppBar({ window, user }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navItems, setNavItems] = useState([
    'home',
    'about',
    'transcriptions',
    'contact',
    'login',
  ]);

  useEffect(() => {
    if (user) {
      setNavItems(['home', 'about', 'transcriptions', 'contact', 'logout']);
    } else {
      setNavItems(['home', 'about', 'transcriptions', 'contact', 'login']);
    }
  }, [user]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Jeff Smith Music
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', mx: 1 }}>
                  <Link
                    style={{ textDecoration: 'none', color: '#fff' }}
                    to={`${item}`}
                  >
                    {item}
                  </Link>
                </Button>
              ))}
            </Box>
            <SearchBar />
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Sidebar
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  user: PropTypes.object,
};

export default DrawerAppBar;
