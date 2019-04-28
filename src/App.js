import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import createNavigator from '~/routes';
import navigation from '~/services/navigation';

import { View, Text } from 'react-native';

import './config/StatusBarConfig';

class App extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      isAuthChecked: PropTypes.bool,
      isSignedIn: PropTypes.bool,
    }).isRequired,
  };

  registerService = (ref) => {
    navigation.setTopLevelNavigator(ref);
  };

  render() {
    const { auth } = this.props;

    if (!auth.isAuthChecked) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    const Routes = createNavigator(auth.isSignedIn);

    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
