import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/material';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <SecondComp />
    </Box>
  );
}

export default App;
