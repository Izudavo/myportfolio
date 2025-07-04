import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container,
  Typography // Added missing import
} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: 'var(--primary-color)',
        py: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          px: 0 // Remove default padding
        }}>
          <Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  color: 'var(--light-text)',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}
              >
                David Obinta
              </Typography>
            </Link>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              component={Link} 
              to="/" 
              sx={{ 
                color: 'var(--light-text)',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': {
                  color: 'var(--secondary-color)',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Home
            </Button>
            <Button 
              component={Link} 
              to="/about" 
              sx={{ 
                color: 'var(--light-text)',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': {
                  color: 'var(--secondary-color)',
                  backgroundColor: 'transparent'
                }
              }}
            >
              About
            </Button>
            <Button 
              component={Link} 
              to="/resources" 
              sx={{ 
                color: 'var(--light-text)',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                '&:hover': {
                  color: 'var(--secondary-color)',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Resources
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;