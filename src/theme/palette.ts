import colors from '../sass/_themes-vars.module.scss';

const themePalette = (themeMode: 'dark' | 'light') => {
  return {
    common: {
      black: themeMode === 'light' ? colors.darkPaper : '#000',
      white: themeMode === 'light' ? '#fff' : colors.paper
    },
    primary: {
      light: themeMode === 'light' ? colors.primaryLight : colors.darkPrimaryLight,
      main: themeMode === 'light' ? colors.primaryMain : colors.darkPrimaryMain,
      dark: themeMode === 'light' ? colors.primaryDark : colors.darkPrimaryDark,
      200: themeMode === 'light' ? colors.primary200 : colors.darkPrimary200,
      800: themeMode === 'light' ? colors.primary800 : colors.darkPrimary800
    },
    secondary: {
      light: themeMode === 'light' ? colors.secondaryLight : colors.darkSecondaryLight,
      main: themeMode === 'light' ? colors.secondaryMain : colors.darkSecondaryMain,
      dark: themeMode === 'light' ? colors.secondaryDark : colors.darkSecondaryDark,
      200: themeMode === 'light' ? colors.secondary200 : colors.darkSecondary200,
      800: themeMode === 'light' ? colors.secondary800 : colors.darkSecondary800
    },
    error: {
      light: themeMode === 'light' ? colors.errorLight : colors.darkErrorLight,
      main: themeMode === 'light' ? colors.errorMain : colors.darkErrorMain,
      dark: themeMode === 'light' ? colors.errorDark : colors.darkErrorDark
    },
    warning: {
      light: themeMode === 'light' ? colors.warningLight : colors.darkWarningLight,
      main: themeMode === 'light' ? colors.warningMain : colors.darkWarningMain,
      dark: themeMode === 'light' ? colors.warningDark : colors.darkWarningDark
    },
    success: {
      light: themeMode === 'light' ? colors.successLight : colors.darkSuccessLight,
      200: themeMode === 'light' ? colors.success200 : colors.darkSuccess200,
      main: themeMode === 'light' ? colors.successMain : colors.darkSuccessMain,
      dark: themeMode === 'light' ? colors.successDark : colors.darkSuccessDark
    },
    info: {
      light: themeMode === 'light' ? colors.infoLight : colors.darkInfoLight,
      main: themeMode === 'light' ? colors.infoMain : colors.darkInfoMain,
      dark: themeMode === 'light' ? colors.infoDark : colors.darkInfoDark
    },
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      800: colors.grey800,
      900: colors.grey900
    },
    text: {
      primary: themeMode === 'light' ? colors.textPrimary : colors.darkTextPrimary,
      secondary: themeMode === 'light' ? colors.textSecondary : colors.darkTextSecondary,
      disabled: themeMode === 'light' ? colors.textDisabled : colors.darkTextDisabled,
      contrast: themeMode === 'light' ? '#000' : '#fff'
    },
    background: {
      paper: themeMode === 'light' ? colors.paper : colors.darkPaper,
      default: themeMode === 'light' ? colors.background : colors.darkBackground
    }
  };
};

export default themePalette;
