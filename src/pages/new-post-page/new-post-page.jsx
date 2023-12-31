import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Container, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const handleSubmit = async (e) => {
  e.preventDefault();
};

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
          onSubmit={handleSubmit}
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
            {/* <TextEditor
              onChange={(value) => {
                setContent(value);
              }}
            /> */}
            {/* 
            TODO:
            - Create, import, and render the new TextEditor component
              - Use this code inside: https://tiptap.dev/docs/editor/examples/default
              - Figure out how to get the content value (probably forward the onChange prop)
            */}
            <Typography variant="subtitle1" gutterBottom>
              Upload Image:
            </Typography>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ width: '25%' }}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <Typography variant="subtitle1" gutterBottom>
              Upload Thumbnail:
            </Typography>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ width: '25%' }}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            value="submit"
            size="large"
            sx={{ width: '25%', mt: 10, mx: 36 }}
          >
            Create Post
          </Button>
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
