import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white
  },
  wrapperDark: {
    backgroundColor: theme.colors.black
  },
  darkModeWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20
  },
  calc:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 28
  },
  equationTotal: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 62,
    color: theme.colors.black
  },
  equationTotalDark: {
    color: theme.colors.white
  },
  equation: {
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 26,
    color: theme.colors.black
  },
  equationDark: {
    color: theme.colors.white
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    backgroundColor: theme.colors.purple,
    maxWidth: 74,
    height: 66,
    width: '100%',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 31,
    fontWeight: 'bold',
    color: theme.colors.white
  }
});

export default styles;
