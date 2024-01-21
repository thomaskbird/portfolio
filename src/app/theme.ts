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
    error: {
      main: '#5e1b1b',
    },
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
      main: 'rgba(0,0,0, 0.2)',
    },
    secondary: {
      main: 'rgba(255,255,255,0.5)'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Source Sans 3',
      fontWeight: '600'
    },
    h2: {
      fontFamily: 'Source Sans 3',
      fontWeight: '600'
    },
    h3: {
      fontFamily: 'Source Sans 3',
      fontWeight: '600'
    },
    h4: {
      fontFamily: 'Source Sans 3',
      fontWeight: '600'
    },
    h5: {
      fontFamily: 'Source Sans 3',
      fontWeight: '600'
    },
    h6: {
      fontFamily: 'Source Sans 3',
      fontWeight: '600'
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: 'Roboto Mono',
      lineHeight: '200%',
    },
    body2: {
      color: '#666',
      fontSize: 18,
      fontFamily: 'Roboto Mono',
      lineHeight: '125%',
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
              background: 'rgba(0,0,0,0.85)'
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
            ':hover': {
              color: '#eee',
              background: 'none',
            },
            ':active': {
              background: 'linear-gradient(180deg,#fff,#ccc)',
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
    },
    // MuiFormControl: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //     })
    //   }
    // },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            background: '#000',
          }),
          ':focused': {
            color: '#ccc !important'
          },
          color: '#aaa',
          fontSize: '14px'
        })
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            background: '#000',
          }),
          color: '#aaa',
          fontSize: '14px',
          padding: '10px 15px'
        })
      }
    },
  },
  shape: {
    borderRadius: 0
  },
});

export default theme;