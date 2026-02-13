import React from 'react';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from 'src/navigation/RootNavigator';
import { ThemeProvider, useTheme } from 'src/store/themeContext';

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
