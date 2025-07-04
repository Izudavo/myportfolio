import { Box, Typography, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <Box 
      component={motion.div} // Wrap entire component with motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--primary-color)',
        zIndex: 9999,
        color: 'var(--light-text)'
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Meet - David Obinta
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CircularProgress color="inherit" size={24} thickness={4} />
      </motion.div>
    </Box>
  );
};

export default SplashScreen;