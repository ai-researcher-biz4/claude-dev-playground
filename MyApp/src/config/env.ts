import Config from 'react-native-config';

export const ENV = {
  API_BASE_URL: Config.API_BASE_URL || 'http://localhost:3000/api',
  APP_ENV: Config.APP_ENV || 'development',
} as const;

export const IS_DEV = ENV.APP_ENV === 'development';
export const IS_STAGING = ENV.APP_ENV === 'staging';
export const IS_PROD = ENV.APP_ENV === 'production';
