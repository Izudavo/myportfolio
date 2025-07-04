import { Container, Box, Typography, Tabs, Tab, Paper } from '@mui/material';
import { useState } from 'react';
import BMICalculator from '../components/BMICalculator';
import Calculator from '../components/Calculator';
import Footer from '../components/Footer';

const Resources = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700,
            color: 'var(--primary-color)',
            mb: 2
          }}
        >
          Helpful Tools
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.8,
            maxWidth: '800px'
          }}
        >
          A collection of useful calculators and tools to help with your health and productivity.
        </Typography>
      </Box>
      
      <Paper 
        sx={{ 
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden'
        }}
      >
        <Tabs 
          value={activeTab} 
          onChange={handleChange}
          sx={{
            backgroundColor: 'var(--card-bg)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <Tab 
            label="BMI Calculator" 
            sx={{ 
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem'
            }} 
          />
          <Tab 
            label="Calculator" 
            sx={{ 
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem'
            }} 
          />
        </Tabs>
        
        <Box sx={{ p: 4 }}>
          {activeTab === 0 && <BMICalculator />}
          {activeTab === 1 && <Calculator />}
        </Box>
      </Paper>
    </Container>
    <Footer />
    </>
  );
};

export default Resources;