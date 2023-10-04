import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://i.imgur.com/UvvGvBO.jpg"
          alt="JSMusic"
          sx={{
            borderRadius: 2,
          }}
        />
        <CardContent sx={{ mb: 0.5 }}>
          <Chip label="Lesson" size="small" variant="outlined" sx={{ mb: 1 }} />
          <Typography
            sx={{ mb: 0.5, fontWeight: 'bold' }}
            variant="subtitle1"
            component="div"
          >
            How To Play The Major Scale In Three Positions
          </Typography>
          <Typography variant="caption" color="text.secondary">
            September 20, 2023
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
