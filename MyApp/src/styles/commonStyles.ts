import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, SPACING } from 'src/constants/dimensions';

/**
 * Common reusable styles across the app.
 * Use these alongside theme-specific colors from useTheme().
 */
export const commonStyles = StyleSheet.create({
  // Layout
  flex1: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  wrap: {
    flexWrap: 'wrap',
  },

  // Spacing - Padding
  paddingSm: {
    padding: SPACING.SM,
  },
  paddingMd: {
    padding: SPACING.MD,
  },
  paddingLg: {
    padding: SPACING.LG,
  },
  paddingXl: {
    padding: SPACING.XL,
  },
  paddingHorizontalMd: {
    paddingHorizontal: SPACING.MD,
  },
  paddingHorizontalLg: {
    paddingHorizontal: SPACING.LG,
  },
  paddingVerticalSm: {
    paddingVertical: SPACING.SM,
  },
  paddingVerticalMd: {
    paddingVertical: SPACING.MD,
  },

  // Spacing - Margin
  marginSm: {
    margin: SPACING.SM,
  },
  marginMd: {
    margin: SPACING.MD,
  },
  marginBottomXs: {
    marginBottom: SPACING.XS,
  },
  marginBottomSm: {
    marginBottom: SPACING.SM,
  },
  marginBottomMd: {
    marginBottom: SPACING.MD,
  },
  marginBottomLg: {
    marginBottom: SPACING.LG,
  },
  marginBottomXl: {
    marginBottom: SPACING.XL,
  },
  marginTopSm: {
    marginTop: SPACING.SM,
  },
  marginTopMd: {
    marginTop: SPACING.MD,
  },
  marginTopLg: {
    marginTop: SPACING.LG,
  },

  // Gaps
  gapXs: {
    gap: SPACING.XS,
  },
  gapSm: {
    gap: SPACING.SM,
  },
  gapMd: {
    gap: SPACING.MD,
  },
  gapLg: {
    gap: SPACING.LG,
  },

  // Border radius
  roundedSm: {
    borderRadius: BORDER_RADIUS.SM,
  },
  roundedMd: {
    borderRadius: BORDER_RADIUS.MD,
  },
  roundedLg: {
    borderRadius: BORDER_RADIUS.LG,
  },
  roundedFull: {
    borderRadius: BORDER_RADIUS.FULL,
  },

  // Shadows (iOS)
  shadowSm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowMd: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  shadowLg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },

  // Position
  absolute: {
    position: 'absolute',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // Overflow
  overflowHidden: {
    overflow: 'hidden',
  },

  // Text alignment
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },

  // Full width
  fullWidth: {
    width: '100%',
  },

  // Divider
  divider: {
    height: 1,
    width: '100%',
  },
});
