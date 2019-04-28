import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const TabBarIcon = ({ name, focused }) => (
  <Icon name={name} size={26} color={focused ? styles.focused.color : styles.blured.color} />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabBarIcon;
