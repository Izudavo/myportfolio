import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SplashScreen from './SplashScreen';
import Footer from '../components/Footer';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--accent-color)'
      }}
    >
      <Container maxWidth="lg" sx={{ 
        py: 8,
        flex: 1,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4
      }}>
        <Box sx={{ 
          maxWidth: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          mb: { xs: 4, md: 0 }
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                color: 'var(--primary-color)',
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Transforming Ideas Into Digital Reality
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'var(--text-color)',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              Biomedical Technology Student + Cloud Architect + Web3 Dev building reliable systems.
              <br />
              AWS certified. React interfaces with blockchain Engineering. Video editor when servers are cool.
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  href="/about"
                  sx={{
                    backgroundColor: 'var(--secondary-color)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: '8px',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: '#0e5fd9'
                    }
                  }}
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  href="/resources"
                  sx={{
                    borderColor: 'var(--secondary-color)',
                    color: 'var(--secondary-color)',
                    px: 4,
                    py: 1.5,
                    borderRadius: '8px',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(21, 112, 239, 0.1)'
                    }
                  }}
                >
                  My Tools
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </Box>

        {/* Image Section - Now visible on all screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: isMobile ? '250px' : '350px',
            height: isMobile ? '250px' : '350px',
            borderRadius: '50%',
            border: '8px solid var(--secondary-color)',
            padding: '4px',
            backgroundColor: 'white',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: isMobile ? '0 auto' : '0'
          }}
        >
          <Box
            component="img"
            src="/images/izu.png" 
            alt="Professional Profile"
            sx={{
              width: '100%',
              height: '110%',
              objectFit: 'cover',
              borderRadius: '20%'
            }}
          />
        </motion.div>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;