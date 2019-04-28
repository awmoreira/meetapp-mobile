import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container, Left, Title, Right,
} from './styles';

const Header = ({ navigation, title, isStacked }) => (
  <Container>
    <Left>
      {isStacked && (
        <TouchableOpacity
          hitSlop={{
            top: 5,
            left: 10,
            right: 10,
            bottom: 5,
          }}
          activeOpacity={0.65}
          onPress={() => navigation.goBack()}
        >
          <Icon name="ios-arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </Left>
    <Title>{title}</Title>
    <Right
      hitSlop={{
        top: 5,
        left: 10,
        right: 10,
        bottom: 5,
      }}
      activeOpacity={0.65}
      onPress={() => navigation.navigate('Profile')}
    >
      <Icon name="md-person" size={24} color="#fff" />
    </Right>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  isStacked: PropTypes.bool,
};

Header.defaultProps = {
  isStacked: false,
};

export default withNavigation(Header);
