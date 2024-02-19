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

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    hero: true;
    clear: true;
    nav: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme: Theme = createTheme({
  palette: {
    error: {
      main: '#916363',
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
    },
    success: {
      main: 'rgba(29,194,123,0.5)'
    }
  },
  typography: {
    h1: {
      fontSize: '74px',
      fontFamily: 'var(--font-source-sans-3)',
      fontWeight: '700'
    },
    h2: {
      fontSize: '64px',
      fontFamily: 'var(--font-source-sans-3)',
      fontWeight: '700'
    },
    h3: {
      fontSize: '54px',
      fontFamily: 'var(--font-source-sans-3)',
      fontWeight: '700'
    },
    h4: {
      fontSize: '44px',
      fontFamily: 'var(--font-source-sans-3)',
      fontWeight: '700'
    },
    h5: {
      fontSize: '32px',
      fontFamily: 'var(--font-source-sans-3)',
      fontWeight: '700'
    },
    h6: {
      fontSize: '26px',
      fontFamily: 'var(--font-source-sans-3)',
      fontWeight: '700'
    },
    body1: {
      color: '#999',
      fontSize: 32,
      fontWeight: 400,
      fontFamily: 'var(--font-source-sans-3)',
      lineHeight: '200%',
    },
    body2: {
      color: '#999',
      fontSize: 24,
      fontWeight: 400,
      fontFamily: 'var(--font-source-sans-3)',
      lineHeight: '200%',
    },
    body3: {
      color: '#999',
      fontWeight: 400,
      fontFamily: 'var(--font-source-sans-3)',
      fontSize: 16,
      lineHeight: '200%',
    },
    button: {
      fontFamily: 'var(--font-source-sans-3)',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '16px'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body3: 'p'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          backdropFilter: 'blur(12px)',
          backgroundColor: 'transparent',
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
              background: 'transparent',
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
            textTransform: 'uppercase',
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
            border: 'none',
            ':hover': {
              border: 'none',
              color: 'rgba(0,0,0,1)',
              background: 'linear-gradient(180deg,#fff,#fff)',
            }
          }),
        })
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '1px',
          background: 'linear-gradient(45deg,#000 0,#333 50%, #111 100%);',
        })
      }
    },
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
            background: '#070707',
            transition: 'all ease-in 0.5s',

            ':hover': {
              background: 'linear-gradient(45deg,#111 0, #000 100%);',
            }
          }),
          color: '#aaa',
          fontSize: '14px',
          padding: '10px 15px'
        }),
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '.MuiPaper-root': {
            width: '100%',
            background: 'linear-gradient(230deg,#222,#000)',
          },
          '.MuiListItem-root': {
            a: {
              color: '#aaa',
              width: '100%',
              textDecoration: 'none',
              transition: 'all ease-in 0.5s',
              ':hover': {
                color: '#fff',
                paddingLeft: '10px',
              }
            }
          }
        })
      }
    }
  },
  shape: {
    borderRadius: 0
  },
});

export default theme;
