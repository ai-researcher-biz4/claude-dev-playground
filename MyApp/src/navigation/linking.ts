import type { LinkingOptions } from '@react-navigation/native';

import type { RootStackParamList } from 'src/types/navigation';

const DEEP_LINK_PREFIX = 'myapp://';
const UNIVERSAL_LINK_PREFIX = 'https://myapp.com/';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [DEEP_LINK_PREFIX, UNIVERSAL_LINK_PREFIX],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
          ForgotPassword: 'forgot-password',
          OtpVerification: 'otp-verification',
        },
      },
      Main: {
        screens: {
          Home: 'home',
          Search: 'search',
          Notifications: 'notifications',
          Profile: 'profile',
        },
      },
      Settings: 'settings',
      Detail: 'detail/:id',
    },
  },
};
