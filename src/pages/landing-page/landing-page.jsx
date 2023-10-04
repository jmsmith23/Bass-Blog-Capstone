import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import { Container, Grid, Box } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Carousel />
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
  );
};

export default LandingPage;
