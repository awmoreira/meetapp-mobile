import colors from './colors';
import metrics from './metrics';

export default {
  button: {
    backgroundColor: colors.primary,
    width: metrics.width - 40,
    height: 47,
    borderRadius: metrics.baseRadius * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },

  errorText: {
    color: colors.danger,
    fontSize: 11,
  },
};
