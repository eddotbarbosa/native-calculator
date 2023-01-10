import {useState} from 'react';
import {View, Text, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';

import styles from './calculator.styles';
import {theme as stylesTheme} from '../../styles/theme';

import Moon from '../../assets/moon-icon.svg';
import Sun from '../../assets/sun-icon.svg';
import Back from '../../assets/back-icon.svg';

import {useThene} from '../../hooks/useTheme';

const Calculator = function () {
  const [currentValue, setCurrentValue] = useState('');
  const [firstParameter, setFirstParameter] = useState<string>('');
  const [secondParameter, setSecondParameter] = useState<string>('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState<number>();

  const {theme, setTheme} = useThene();

  const handleNumberPress = function (value: string) {
    if (result) {
      return handleClear();
    }

    if (!operation) {
      return setCurrentValue(currentValue + value);
    };

    if (firstParameter) {
      return setSecondParameter(secondParameter + value);
    }
  };

  const handleOperationPress = function (value: string) {
    if (!firstParameter) {
      if (!currentValue) return null;

      setFirstParameter(currentValue);
      setOperation(value);
      return setCurrentValue('');
    }
  };

  const handleBack = function () {
    if (result) {
      return handleClear();
    }

    if (firstParameter) {
      return setSecondParameter(secondParameter.substring(0, secondParameter.length - 1));
    }

    return setCurrentValue(currentValue.substring(0, currentValue.length - 1));
  };

  const handlePlusOrMinus = function () {
    if (currentValue) {
      if (currentValue.substring(0, 1) === '-') {
        return setCurrentValue(currentValue.replace('-', ''));
      }

      return setCurrentValue('-' + currentValue);
    }

    if (secondParameter) {
      if (secondParameter.substring(0, 1) === '-') {
        return setSecondParameter(secondParameter.replace('-', ''));
      }

      return setSecondParameter('-' + secondParameter);
    }

    return null;
  };

  const handleClear = function () {
    setCurrentValue('');
    setFirstParameter('');
    setSecondParameter('');
    setOperation('');
    return setResult(undefined);
  };

  const handleResult = function () {
    if (!secondParameter) {
      return null;
    }

    switch (operation) {
      case '+':
        setResult(parseFloat(firstParameter) + parseFloat(secondParameter))
        break;
      case '-':
        setResult(parseFloat(firstParameter) - parseFloat(secondParameter))
        break;
      case 'x':
        setResult(parseFloat(firstParameter) * parseFloat(secondParameter))
        break;
      case '/':
        setResult(parseFloat(firstParameter) / parseFloat(secondParameter))
        break;
      case '%':
          setResult(parseFloat(firstParameter) % parseFloat(secondParameter))
          break;

      default:
        break;
    }
  };

  return (
    <View style={[styles.wrapper, theme === 'dark' && styles.wrapperDark]}>
      <View style={styles.darkModeWrapper}>
        {theme === 'light' ? (
          <TouchableWithoutFeedback onPress={() => {setTheme('dark')}}>
            <Moon />
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => {setTheme('light')}}>
            <Sun />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View>
        <View style={styles.calc}>
          <View >
            <Text style={[styles.equationTotal, theme === 'dark' && styles.equationTotalDark]}>{result}</Text>
            <Text style={[styles.equation, theme === 'dark' && styles.equationDark]}>{secondParameter} {operation} {currentValue ? currentValue : firstParameter}</Text>
          </View>
        </View>

        <View>
          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleClear()}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handlePlusOrMinus()}>
              <Text style={styles.buttonText}>+/-</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() =>handleOperationPress('%')}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleOperationPress('/')}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleOperationPress('x')}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleOperationPress('-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleOperationPress('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('.')}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleNumberPress('0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleBack()}>
              <Back />
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={stylesTheme.colors.purpleTwo} onPress={() => handleResult()}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

export {Calculator};
