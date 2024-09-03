/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Pressable, Text, View} from 'react-native';
import {colors, globalStyle} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    formula,
    number,
    buildNumber,
    prevNumber,
    toggleSign,
    clean,
    deleteNumber,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyle.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text 
            adjustsFontSizeToFit
            numberOfLines={ 1 }
            style={globalStyle.subResult}>{formula}</Text>

        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyle.mainResult}>
          { prevNumber === '0' ? ' ' : prevNumber }
        </Text>

      </View>

      <View style={{flexDirection: 'row'}}>
        <CalculatorButton
          onPress={() => clean()}
          blackText
          label="C"
          color={colors.lightGray}
        />

        <CalculatorButton
          onPress={() => toggleSign()}
          blackText
          label="+/-    "
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => deleteNumber()}
          blackText
          label="del"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="/"
          color={colors.orange}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CalculatorButton
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={ multiplyOperation }
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CalculatorButton
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={ addOperation }
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CalculatorButton
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={ subtractOperation }
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          dobleSize
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('.')}
          label="."
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.lightGray}
        />
      </View>
    </View>
  );
};
