import { type ThemeOptions } from '@mui/material';
import themePalette from './palette';

const theme = (themeMode: 'dark' | 'light'): Partial<ThemeOptions> => {
  const palette = themePalette(themeMode);

  return {
    palette,
    shape: {
      borderRadius: 16
    },
    mixins: {
      toolbar: {
        minHeight: 56,
        '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: 48
        },
        '@media (min-width:600px)': {
          minHeight: 64
        }
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: palette.background.default
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: 'none',
            backgroundColor: theme.palette.background.default,
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['box-shadow', 'width', 'margin', 'z-index'], {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.leavingScreen
            })
          })
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            boxShadow: theme.shadows[1]
          })
        }
      },
      MuiDrawer: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: theme.shadows[1]
          }),
          paper: ({ theme }) => ({
            position: 'relative',
            whiteSpace: 'nowrap',
            borderRight: 'none',
            width: 240,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box'
          })
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            transform: 'scale(100%)',
            transition: theme.transitions.create('transform', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.shorter
            }),
            '&:hover': {
              transform: 'scale(102%)',
              transition: theme.transitions.create('transform', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest / 2
              })
            },
            '&:active': {
              transform: 'scale(99%)',
              transition: theme.transitions.create('transform', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest / 2
              })
            }
          })
        }
      }
    }
  };
};

export default theme;
