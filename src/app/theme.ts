import {createTheme} from "@mui/material";
import {Theme} from "@mui/system";

declare module '@mui/material/styles' {
  interface Palette {
    hero: Palette['primary']
    clear: Palette['primary']
  }

  interface PaletteOptions {
    hero?: PaletteOptions['primary'];
    clear?: PaletteOptions['primary']
  }

  interface Theme {

  }

  interface ThemeOptions {

  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    hero: true;
    clear: true;
  }
}

const theme: Theme = createTheme({
  palette: {
    hero: {
      main: '#000',
      contrastText: '#fff'
    },
    clear: {
      main: '#fff',
    },
    primary: {
      main: 'rgba(39,62,93,1)',
    }
  },
  typography: {
    h1: {
      fontFamily: 'Source Sans 3',
    },
    h2: {
      fontFamily: 'Source Sans 3',
    },
    h3: {
      fontFamily: 'Source Sans 3',
    },
    h4: {
      fontFamily: 'Source Sans 3',
    },
    h5: {
      fontFamily: 'Source Sans 3',
    },
    h6: {
      fontFamily: 'Source Sans 3',
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Roboto Mono',
      textTransform: 'none',
      fontWeight: 400,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'hero' && {
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0.75)'
            }
          }),
          ...(ownerState.color === 'clear' && {
            ':hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            }
          }),
          padding: '10px 25px'
        })
      }
    }
  },
  shape: {
    borderRadius: 0
  },
});

export default theme;