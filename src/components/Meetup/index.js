import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const Meetup = ({
  meetup, isFirst, isLast, navigation, displayStyle,
}) => (
  <View
    style={[
      styles.container,
      displayStyle === 'full' ? styles.full : {},
      displayStyle === 'reduced' && isFirst ? styles.isReducedFirst : {},
      isLast ? styles.isReducedLast : {},
      displayStyle === 'full' && isFirst ? styles.isFullFirst : {},
      isLast ? styles.isFullLast : {},
    ]}
  >
    <Touchable
      style={styles.touchable}
      onPress={() => navigation.navigate('Meetup', { meetup })}
      activeOpacity={0.65}
      foreground={Touchable.Ripple('#fff', true)}
    >
      <Fragment>
        <Image
          source={{ uri: `http://10.0.3.2:3333/files/${meetup.file.id}?width=480` }}
          style={styles.image}
        />
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
              {meetup.title}
            </Text>
            <Text style={styles.subscribedCount}>
              {meetup.__meta__.users_count}{' '}
              {meetup.__meta__.users_count !== '1' ? 'inscritos' : 'inscrito'}
            </Text>
          </View>
          <View style={styles.button}>
            <Icon name="ios-arrow-round-forward" size={16} color="#fff" />
          </View>
        </View>
      </Fragment>
    </Touchable>
  </View>
);

Meetup.propTypes = {
  meetup: PropTypes.shape({
    __meta__: PropTypes.shape({
      users_count: PropTypes.string,
    }),
    title: PropTypes.string,
    slug: PropTypes.string,
    file: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  displayStyle: PropTypes.string,
};

Meetup.defaultProps = {
  isFirst: false,
  isLast: false,
  displayStyle: 'reduced',
};

export default withNavigation(Meetup);
