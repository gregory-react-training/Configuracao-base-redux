import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },

  textoRiscado: {
    textDecorationLine: 'line-through',
  },

  textoNormal: {
    textDecorationLine: 'none',
  },
});

export default styles;
