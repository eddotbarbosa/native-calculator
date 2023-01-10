import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from './home.styles';

import {Calculator} from '../../components/calculator/calculator';

import {useThene} from '../../hooks/useTheme';

const Home = function () {
  const {theme} = useThene();

  return (
    <SafeAreaView style={[styles.wrapper, theme === 'dark' && styles.wrapperDark]}>
      <Calculator />
    </SafeAreaView>
  );
};

export {Home};
