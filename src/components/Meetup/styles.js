import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: metrics.width * 0.75,
    borderRadius: metrics.baseRadius * 3,
    overflow: 'hidden',
    marginHorizontal: metrics.baseMargin,
  },
  full: {
    width: metrics.width - 40,
    marginVertical: metrics.baseMargin,
    marginHorizontal: 0,
  },
  isReducedFirst: {
    marginLeft: metrics.baseMargin * 2,
  },
  isReducedLast: {
    marginRight: metrics.baseMargin * 2,
  },
  isFullFirst: {
    marginTop: metrics.baseMargin * 2,
  },
  isFullLast: {
    marginBottom: metrics.baseMargin * 2,
  },
  touchable: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: '55%',
    width: metrics.width * 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.basePadding / 2,
  },
  infoContainer: {
    flex: 1,
    paddingRight: metrics.basePadding / 4,
  },
  title: {
    color: colors.darker,
    fontSize: 16,
    maxHeight: 42,
    overflow: 'hidden',
  },
  subscribedCount: {
    color: colors.regular,
    fontSize: 12,
    marginTop: metrics.baseMargin / 2,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 26,
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
