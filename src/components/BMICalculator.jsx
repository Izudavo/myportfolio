import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 25) setStatus('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 30) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        BMI Calculator
      </Typography>
      
      <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
        <TextField
          label="Weight (kg)"
          variant="outlined"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          label="Height (cm)"
          variant="outlined"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Box>
      
      <Button variant="contained" onClick={calculateBMI} sx={{ mt: 2 }}>
        Calculate BMI
      </Button>
      
      {bmi && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Your BMI: {bmi}</Typography>
          <Typography variant="body1">Status: {status}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default BMICalculator;