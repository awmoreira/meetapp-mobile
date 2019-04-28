import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
  focused: {
    color: colors.white,
  },
  blured: {
    color: colors.whiteTransparent(0.3),
  },
});

export default styles;
