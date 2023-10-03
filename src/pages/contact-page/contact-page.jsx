/* eslint-disable react/no-unescaped-entities */
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center', my: 6 }}>
        Contact Me
      </Typography>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 8,
        }}
        maxWidth="md"
      >
        <Typography component="div">
          Thank you for visiting my website! Whether you have questions,
          comments, or you're interested in any of the services I offer, I'd
          love to hear from you. Please feel free to get in touch using the
          contact form below, and I'll get back to you as soon as possible.
          <br />
          <br />
          <Box sx={{ fontWeight: 'bold' }}>Services I Provide:</Box>
          <br />
          <Box sx={{ fontWeight: 'bold' }}>Bass Guitar Lessons:</Box> Whether
          you are a beginner looking to start your musical journey or an
          experienced player aiming to enhance your skills, I offer personalized
          bass guitar lessons to suit your needs and goals.
          <br />
          <br />
          <Box sx={{ fontWeight: 'bold' }}>Transcriptions:</Box> Need a song
          transcribed for your band or personal practice? I can help you with
          accurate and detailed music transcriptions.
          <br />
          <br /> <Box sx={{ fontWeight: 'bold' }}>Studio/Session Work:</Box> I
          am available for studio and session work, bringing my expertise on the
          bass guitar to your musical projects. Let's collaborate to create
          outstanding music together.
          <br />
          <br /> <Box sx={{ fontWeight: 'bold' }}>Gigs:</Box> If you are looking
          to book me for live performances or gigs, please provide the details,
          and I'll be happy to discuss availability and arrangements.
          <br />
          <br /> Please use the form below to contact me, and don't forget to
          include any specific information related to your inquiry or booking
          request. Your music and your satisfaction are my top priorities, and I
          look forward to working with you!
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 8,
        }}
        maxWidth="sm"
      >
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Name"
            size="small"
          />
          <TextField
            required
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
            size="small"
          />
          <TextField
            required
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Message"
            multiline
            rows={4}
            size="small"
          />
        </Box>
        <Button variant="contained">Send Message</Button>
      </Container>
    </>
  );
};

export default ContactPage;
