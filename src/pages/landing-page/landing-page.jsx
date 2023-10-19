import Card from '../../components/card/card';
import { Container, Grid, Box, Paper } from '@mui/material';

const LandingPage = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          backgroundImage: 'url(https://i.imgur.com/919ix4p.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100dvh',
        }}
      ></Paper>
      <Container>
        {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="J Smith Bass"
        src="https://i.imgur.com/919ix4p.jpg"
      /> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container my={3} spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
