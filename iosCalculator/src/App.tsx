import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {globalStyle} from './config/theme/app-theme';

function App() {
  return (
    <View style={globalStyle.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <CalculatorScreen />
    </View>
  );
}

export default App;
