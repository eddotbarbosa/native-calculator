import {StatusBar} from 'expo-status-bar';

import {Home} from './src/pages/Home/home';

import {theme} from './src/styles/theme';

import {ThemeProvider} from './src/contexts/themeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
      <StatusBar style="light" backgroundColor={theme.colors.purple}/>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
