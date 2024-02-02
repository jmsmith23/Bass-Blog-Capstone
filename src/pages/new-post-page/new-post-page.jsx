import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import TextEditor from '../../components/text-editor/text-editor';

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
  const [content, setContent] = useState('');
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([]);

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
            {/* TODO: Render a list of badges using the tags array */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              <TextField
                label="Tag"
                id="outlined-size-normal"
                sx={{ maxWidth: 200 }}
                value={newTag}
                onChange={(e) => {
                  setNewTag(e.target.value);
                }}
              />
              <Button
                variant="contained"
                size="small"
                sx={{ width: '2em' }}
                onClick={() => {
                  // NOTE: When you set a state that depends on the old value, always use an arrow function
                  setTags((tags) => [...tags, newTag]);
                }}
              >
                Add
              </Button>
            </Box>
            <TextEditor
              content={content}
              onChange={(value) => {
                setContent(value);
              }}
            />
            <Typography variant="subtitle1" gutterBottom>
              Upload Thumbnail:
            </Typography>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ width: 'fit-content' }}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              value="submit"
              size="large"
              sx={{ width: 'fit-content', mt: 10, alignSelf: 'center' }}
            >
              Create Post
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default NewPost;
