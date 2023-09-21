import * as React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://i.imgur.com/UvvGvBO.jpg"
          alt="JSMusic"
        />
        <CardContent>
          <Chip label="Lesson" size="small" variant="outlined" sx={{ mb: 1 }} />
          <Typography gutterBottom variant="h5" component="div">
            How To Play The Major Scale In Three Positions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            September 20, 2023
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
