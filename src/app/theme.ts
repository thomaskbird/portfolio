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
      main: 'rgba(255,255,255,0.25)',
    },
    nav: {
      main: 'rgba(255,255,255,0.75)',
    },
    primary: {
      main: 'rgba(255,255,255,0.8)',
    },
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
    MuiAppBar: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            ':hover': {
              background: 'rgba(255,255,255,1)'
            }
          }),
          ...(ownerState.color === 'transparent' && {
            background: 'transparent',
            ':hover': {
              background: 'transparent'
            }
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState}) => ({
          boxSizing: 'border-box',
          padding: '10px 30px',
          ...(ownerState.color === 'clear' && {
            ':hover': {
              color: 'rgba(255,255,255,0.75)',
            }
          }),
          ...(ownerState.color === 'nav' && ownerState.component === 'button' && {
            borderRadius: 0,
            background: 'linear-gradient(180deg,#999,#666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            ':hover': {
              background: 'linear-gradient(180deg,#666,#333)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            ':active': {
              background: 'linear-gradient(180deg,#000,#000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }
          }),
          ...(ownerState.color === 'nav' && ownerState.component === 'span' && {
            borderRadius: 0,
            background: 'linear-gradient(180deg,#999,#666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            ':hover': {
              background: 'linear-gradient(180deg,#aaa,#ccc)',
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
            color: 'rgba(000,000,000,0.75)',
            background: 'linear-gradient(180deg,#fff,#ddd)',
            border: '1px solid rgba(255,255,255,1)',
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
    borderRadius: 100
  },
});

export default theme;