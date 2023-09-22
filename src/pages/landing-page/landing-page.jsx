import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import { Container, Stack, Box } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Carousel />
      <Box sx={{ flexGrow: 1 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Card />
          <Card />
          <Card />
        </Stack>
      </Box>
    </Container>
  );
};

export default LandingPage;
