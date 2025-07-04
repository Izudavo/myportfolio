import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Calculate, Backspace, Functions } from '@mui/icons-material';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);
  const [memory, setMemory] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNumberClick = (number) => {
    if (input === '0' || input === 'Error') {
      setInput(number.toString());
    } else {
      setInput(input + number.toString());
    }
  };

  const handleClear = () => {
    setInput('0');
    setPreviousInput(null);
    setOperation(null);
    setMemory(0);
  };

  const handleOperationClick = (op) => {
    if (input === 'Error') return;

    setPreviousInput(input);
    setOperation(op);
    setInput('0');
  };

  const handleEquals = () => {
    if (!previousInput || !operation || input === 'Error') return;

    try {
      let result;
      const prev = parseFloat(previousInput);
      const current = parseFloat(input);

      switch (operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        case '^':
          result = Math.pow(prev, current);
          break;
        case '√':
          result = Math.pow(prev, 1 / current);
          break;
        default:
          return;
      }

      setInput(result.toString());
      setPreviousInput(null);
      setOperation(null);
    } catch {
      setInput('Error');
    }
  };

  const handleScientificFunction = (fn) => {
    try {
      let result;
      const current = parseFloat(input);

      switch (fn) {
        case 'sin':
          result = Math.sin(current * Math.PI / 180);
          break;
        case 'cos':
          result = Math.cos(current * Math.PI / 180);
          break;
        case 'tan':
          result = Math.tan(current * Math.PI / 180);
          break;
        case 'log':
          result = Math.log10(current);
          break;
        case 'ln':
          result = Math.log(current);
          break;
        case 'sqrt':
          result = Math.sqrt(current);
          break;
        case 'fact':
          result = Array.from({ length: current }, (_, i) => i + 1)
            .reduce((acc, val) => acc * val, 1);
          break;
        case 'π':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;
        default:
          return;
      }

      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const handleMemory = (action) => {
    const current = parseFloat(input);
    if (isNaN(current)) return;

    switch (action) {
      case 'M+':
        setMemory(memory + current);
        break;
      case 'M-':
        setMemory(memory - current);
        break;
      case 'MR':
        setInput(memory.toString());
        break;
      case 'MC':
        setMemory(0);
        break;
      default:
        return;
    }
  };

  const handleBackspace = () => {
    setInput(input.length === 1 ? '0' : input.slice(0, -1));
  };

  const buttons = [
    { label: 'sin', action: () => handleScientificFunction('sin'), color: 'secondary' },
    { label: 'cos', action: () => handleScientificFunction('cos'), color: 'secondary' },
    { label: 'tan', action: () => handleScientificFunction('tan'), color: 'secondary' },
    { label: 'log', action: () => handleScientificFunction('log'), color: 'secondary' },
    { label: 'ln', action: () => handleScientificFunction('ln'), color: 'secondary' },
    { label: '√', action: () => handleScientificFunction('sqrt'), color: 'secondary' },
    { label: 'x^y', action: () => handleOperationClick('^'), color: 'secondary' },
    { label: 'y√x', action: () => handleOperationClick('√'), color: 'secondary' },
    { label: 'π', action: () => handleScientificFunction('π'), color: 'secondary' },
    { label: 'e', action: () => handleScientificFunction('e'), color: 'secondary' },
    { label: 'x!', action: () => handleScientificFunction('fact'), color: 'secondary' },
    { label: 'M+', action: () => handleMemory('M+'), color: 'secondary' },
    { label: 'M-', action: () => handleMemory('M-'), color: 'secondary' },
    { label: 'MR', action: () => handleMemory('MR'), color: 'secondary' },
    { label: 'MC', action: () => handleMemory('MC'), color: 'secondary' },
    { label: '7', action: () => handleNumberClick(7) },
    { label: '8', action: () => handleNumberClick(8) },
    { label: '9', action: () => handleNumberClick(9) },
    { label: '/', action: () => handleOperationClick('/'), color: 'primary' },
    { label: '4', action: () => handleNumberClick(4) },
    { label: '5', action: () => handleNumberClick(5) },
    { label: '6', action: () => handleNumberClick(6) },
    { label: '*', action: () => handleOperationClick('*'), color: 'primary' },
    { label: '1', action: () => handleNumberClick(1) },
    { label: '2', action: () => handleNumberClick(2) },
    { label: '3', action: () => handleNumberClick(3) },
    { label: '-', action: () => handleOperationClick('-'), color: 'primary' },
    { label: '0', action: () => handleNumberClick(0) },
    { label: '.', action: () => setInput(input.includes('.') ? input : input + '.') },
    { label: '⌫', action: handleBackspace, icon: <Backspace /> },
    { label: '+', action: () => handleOperationClick('+'), color: 'primary' },
    { label: 'C', action: handleClear, color: 'error' },
    { label: '=', action: handleEquals, color: 'success', icon: <Calculate /> }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Paper
        elevation={6}
        sx={{
          p: 3,
          width: isMobile ? '100%' : 400,
          borderRadius: 4,
          background: 'linear-gradient(145deg, #f5f5f5, #e0e0e0)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Functions sx={{ mr: 1, fontSize: 32 }} />
          <Typography variant="h5" component="h1">
            Scientific Calculator
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 3,
            p: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 2,
            textAlign: 'right',
            minHeight: 60
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            {previousInput} {operation}
          </Typography>
          <Typography variant="h4" sx={{ wordBreak: 'break-word', fontWeight: 500 }}>
            {input}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Memory: {memory}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)',
            gap: 1.5
          }}
        >
          {buttons.map((btn) => (
            <Button
              key={btn.label}
              variant="contained"
              onClick={btn.action}
              color={btn.color || 'inherit'}
              sx={{
                minWidth: 0,
                height: 56,
                fontSize: btn.label.length > 2 ? '0.75rem' : '1.1rem',
                fontWeight: btn.color ? 600 : 400
              }}
            >
              {btn.icon || btn.label}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Calculator;
