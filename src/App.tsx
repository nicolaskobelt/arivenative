import { ThemeProvider } from '@emotion/react';
import React from 'react';
import theme from './configs/theme';
import AppContainer from './navigation/NavigationProvider';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
