import { Platform } from 'react-native';

const FONT_FAMILY = Platform.select({
  ios: {
    REGULAR: 'System',
    MEDIUM: 'System',
    SEMI_BOLD: 'System',
    BOLD: 'System',
  },
  android: {
    REGULAR: 'Roboto',
    MEDIUM: 'Roboto-Medium',
    SEMI_BOLD: 'Roboto-Medium',
    BOLD: 'Roboto-Bold',
  },
  default: {
    REGULAR: 'System',
    MEDIUM: 'System',
    SEMI_BOLD: 'System',
    BOLD: 'System',
  },
});

export const FONT_FAMILIES = FONT_FAMILY;

export const FONT_SIZES = {
  XXXL: 34,
  XXL: 28,
  XL: 22,
  LG: 20,
  MD: 17,
  SM: 15,
  XS: 13,
  XXS: 11,
} as const;

export const LINE_HEIGHTS = {
  XXXL: 41,
  XXL: 34,
  XL: 28,
  LG: 25,
  MD: 22,
  SM: 20,
  XS: 18,
  XXS: 13,
} as const;

export const FONT_WEIGHTS = {
  REGULAR: '400' as const,
  MEDIUM: '500' as const,
  SEMI_BOLD: '600' as const,
  BOLD: '700' as const,
  EXTRA_BOLD: '800' as const,
};

export const TYPOGRAPHY = {
  // Headings
  H1: {
    fontSize: FONT_SIZES.XXXL,
    lineHeight: LINE_HEIGHTS.XXXL,
    fontWeight: FONT_WEIGHTS.BOLD,
  },
  H2: {
    fontSize: FONT_SIZES.XXL,
    lineHeight: LINE_HEIGHTS.XXL,
    fontWeight: FONT_WEIGHTS.BOLD,
  },
  H3: {
    fontSize: FONT_SIZES.XL,
    lineHeight: LINE_HEIGHTS.XL,
    fontWeight: FONT_WEIGHTS.SEMI_BOLD,
  },
  H4: {
    fontSize: FONT_SIZES.LG,
    lineHeight: LINE_HEIGHTS.LG,
    fontWeight: FONT_WEIGHTS.SEMI_BOLD,
  },

  // Body
  BODY_LG: {
    fontSize: FONT_SIZES.MD,
    lineHeight: LINE_HEIGHTS.MD,
    fontWeight: FONT_WEIGHTS.REGULAR,
  },
  BODY: {
    fontSize: FONT_SIZES.SM,
    lineHeight: LINE_HEIGHTS.SM,
    fontWeight: FONT_WEIGHTS.REGULAR,
  },
  BODY_SM: {
    fontSize: FONT_SIZES.XS,
    lineHeight: LINE_HEIGHTS.XS,
    fontWeight: FONT_WEIGHTS.REGULAR,
  },

  // Labels
  LABEL: {
    fontSize: FONT_SIZES.SM,
    lineHeight: LINE_HEIGHTS.SM,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  },
  LABEL_SM: {
    fontSize: FONT_SIZES.XS,
    lineHeight: LINE_HEIGHTS.XS,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  },

  // Caption
  CAPTION: {
    fontSize: FONT_SIZES.XXS,
    lineHeight: LINE_HEIGHTS.XXS,
    fontWeight: FONT_WEIGHTS.REGULAR,
  },

  // Button
  BUTTON: {
    fontSize: FONT_SIZES.MD,
    lineHeight: LINE_HEIGHTS.MD,
    fontWeight: FONT_WEIGHTS.SEMI_BOLD,
  },
  BUTTON_SM: {
    fontSize: FONT_SIZES.SM,
    lineHeight: LINE_HEIGHTS.SM,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  },
} as const;
