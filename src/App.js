import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components/native';

import createNavigator from '~/routes';
import navigation from '~/services/navigation';

import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1d2331;
`;

const Status = styled.StatusBar``;

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
        <Container>
          <Status backgroundColor="#1d2331" barStyle="light-content" />
          <OrientationLoadingOverlay
            visible
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Loading..."
          />
        </Container>
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
