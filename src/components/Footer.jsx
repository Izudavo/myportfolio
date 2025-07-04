// src/components/Footer.jsx
import { Box, Typography, Container, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box 
      component={motion.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--light-text)',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body1">
            © {new Date().getFullYear()} David Obinta Portfolio
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              component="a" 
              href="https://www.linkedin.com/in/david-obinta/" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'var(--light-text)' }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
            
            <IconButton 
              component="a" 
              href="https://github.com/izudavo" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'var(--light-text)' }}
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>
            
            <IconButton 
              component="a" 
              href="mailto:izuchukwudavido@gmail.com"
              sx={{ color: 'var(--light-text)' }}
              aria-label="Email"
            >
              <EmailIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;