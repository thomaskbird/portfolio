import {createTheme} from "@mui/material";
import {Theme} from "@mui/system";

declare module '@mui/material/styles' {
  interface Palette {
    hero: Palette['primary']
    clear: Palette['primary']
    nav: Palette['primary']
  }

  interface PaletteOptions {
    hero?: PaletteOptions['primary'];
    clear?: PaletteOptions['primary']
    nav?: PaletteOptions['primary'];
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
    nav: true;
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
    nav: {
      main: 'rgba(255,255,255,0.75)',
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
      fontFamily: 'Roboto Mono',
      lineHeight: '200%',
    },
    body2: {
      fontFamily: 'Roboto Mono',
      lineHeight: '200%',
    },
    button: {
      fontFamily: 'Roboto Mono',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '16px'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          boxSizing: 'border-box',
          padding: '10px 20px',
          ...(ownerState.color === 'nav' && {
            background: 'linear-gradient(180deg,#999,#666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            ':hover': {
              background: 'linear-gradient(180deg,#ccc,#aaa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            ':active': {
              background: 'linear-gradient(180deg,#fff,#fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }
          }),
          ...(ownerState.color === 'hero' && ownerState.variant === 'outlined' && {
            color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.5)',
            ':hover': {
              color: 'rgba(255,255,255,1)',
              border: '1px solid rgba(255,255,255,0.85)',
            }
          }),
        })
      }
    }
  },
  shape: {
    borderRadius: 0
  },
});

export default theme;