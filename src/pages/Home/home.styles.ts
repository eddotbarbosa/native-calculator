import {StyleSheet, Platform} from 'react-native';
import Constants from 'expo-constants';

import {theme} from '../../styles/theme';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: statusBarHeight,
    paddingHorizontal: 26
  },
  wrapperDark: {
    backgroundColor: theme.colors.black
  }
});

export {styles};
