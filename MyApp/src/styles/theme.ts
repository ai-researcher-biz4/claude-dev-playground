import { COLORS } from 'src/constants/colors';
import { BORDER_RADIUS, SPACING } from 'src/constants/dimensions';
import { TYPOGRAPHY } from 'src/constants/typography';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  textDisabled: string;
  border: string;
  overlay: string;
  white: string;
  black: string;
}

export interface Theme {
  dark: boolean;
  colors: ThemeColors;
  spacing: typeof SPACING;
  borderRadius: typeof BORDER_RADIUS;
  typography: typeof TYPOGRAPHY;
}

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: COLORS.PRIMARY,
    primaryLight: COLORS.PRIMARY_LIGHT,
    primaryDark: COLORS.PRIMARY_DARK,
    secondary: COLORS.SECONDARY,
    accent: COLORS.ACCENT,
    success: COLORS.SUCCESS,
    error: COLORS.ERROR,
    warning: COLORS.WARNING,
    info: COLORS.INFO,
    background: COLORS.BACKGROUND_LIGHT,
    surface: COLORS.SURFACE_LIGHT,
    card: COLORS.CARD_LIGHT,
    text: COLORS.TEXT_PRIMARY_LIGHT,
    textSecondary: COLORS.TEXT_SECONDARY_LIGHT,
    textDisabled: COLORS.TEXT_DISABLED_LIGHT,
    border: COLORS.BORDER_LIGHT,
    overlay: COLORS.OVERLAY,
    white: COLORS.WHITE,
    black: COLORS.BLACK,
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  typography: TYPOGRAPHY,
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: COLORS.PRIMARY,
    primaryLight: COLORS.PRIMARY_LIGHT,
    primaryDark: COLORS.PRIMARY_DARK,
    secondary: COLORS.SECONDARY,
    accent: COLORS.ACCENT,
    success: COLORS.SUCCESS,
    error: COLORS.ERROR,
    warning: COLORS.WARNING,
    info: COLORS.INFO,
    background: COLORS.BACKGROUND_DARK,
    surface: COLORS.SURFACE_DARK,
    card: COLORS.CARD_DARK,
    text: COLORS.TEXT_PRIMARY_DARK,
    textSecondary: COLORS.TEXT_SECONDARY_DARK,
    textDisabled: COLORS.TEXT_DISABLED_DARK,
    border: COLORS.BORDER_DARK,
    overlay: COLORS.OVERLAY,
    white: COLORS.WHITE,
    black: COLORS.BLACK,
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  typography: TYPOGRAPHY,
};
