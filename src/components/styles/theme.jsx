import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
    fontFamily: [ 'Roboto', 'sans-serif',].join(','),
    fontSize:12
  }
  
})

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });