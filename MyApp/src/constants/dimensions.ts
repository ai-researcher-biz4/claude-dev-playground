import { Dimensions, Platform, StatusBar } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Spacing scale (based on 4px grid)
export const SPACING = {
  NONE: 0,
  XXXS: 2,
  XXS: 4,
  XS: 8,
  SM: 12,
  MD: 16,
  LG: 20,
  XL: 24,
  XXL: 32,
  XXXL: 40,
  XXXXL: 48,
} as const;

// Border radius
export const BORDER_RADIUS = {
  NONE: 0,
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 20,
  XXL: 24,
  FULL: 9999,
} as const;

// Icon sizes
export const ICON_SIZES = {
  XS: 16,
  SM: 20,
  MD: 24,
  LG: 32,
  XL: 40,
  XXL: 48,
} as const;

// Button heights
export const BUTTON_HEIGHTS = {
  SM: 36,
  MD: 44,
  LG: 52,
} as const;

// Input heights
export const INPUT_HEIGHTS = {
  SM: 36,
  MD: 44,
  LG: 52,
} as const;

// Border widths
export const BORDER_WIDTHS = {
  THIN: 0.5,
  DEFAULT: 1,
  MEDIUM: 1.5,
  THICK: 2,
} as const;

// Screen dimensions
export const SCREEN = {
  WIDTH: SCREEN_WIDTH,
  HEIGHT: SCREEN_HEIGHT,
  IS_SMALL: SCREEN_WIDTH < 375,
  IS_LARGE: SCREEN_WIDTH >= 414,
} as const;

// Hit slop for touchable areas
export const HIT_SLOP = {
  SM: { top: 8, bottom: 8, left: 8, right: 8 },
  MD: { top: 12, bottom: 12, left: 12, right: 12 },
  LG: { top: 16, bottom: 16, left: 16, right: 16 },
} as const;

// Status bar height
export const STATUS_BAR_HEIGHT = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight || 24,
  default: 0,
});

// Header height
export const HEADER_HEIGHT = 56;

// Tab bar height
export const TAB_BAR_HEIGHT = 60;
