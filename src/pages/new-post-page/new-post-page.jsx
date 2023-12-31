import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';

const NewPost = () => {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center', my: 6 }}>
        New Post
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 8,
        }}
        maxWidth="normal"
      >
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 1, width: '100%' },
            width: '50%',
          }}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={3}>
            <TextField
              label="Title"
              id="outlined-size-normal"
              sx={{ mb: 20 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              rows={4}
            />
          </Stack>
        </Box>
      </Container>

      {/* 
        TODO:
        - complete this form (add a textarea)
        - change everything to Material if you want
        - write all the "boilerplate" code for handling a form submission
            - NOTE: Uploading the file will be hard
        - create a back-end route for creating a new post
         */}
    </>
  );
};

export default NewPost;
