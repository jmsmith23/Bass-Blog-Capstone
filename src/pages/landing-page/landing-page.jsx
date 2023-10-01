import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import { Container, Stack, Box } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Carousel />
      <Box sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={0.5}>
          <Card />
          <Card />
          <Card />
        </Stack>
      </Box>
      <textarea></textarea>
    </Container>
  );
};

export default LandingPage;
