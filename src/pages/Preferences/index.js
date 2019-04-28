/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Switch } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import api from '../../services/api';

import {
  Container,
  Box,
  Label,
  SwitchContainer,
  SwitchText,
  TitleName,
  Message,
  Button,
  TextButton,
} from './styles';

class Preferences extends Component {
  static propTypes = {
    updateUserRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
    password_confirmation: '',
    front: false,
    back: false,
    mobile: false,
    devops: false,
    manager: false,
    marketing: false,
  };

  async componentDidMount() {
    const response = await api.get('users');

    const { data: user } = response;

    this.setState({
      username: user.username,
      password: user.password,
      password_confirmation: user.password,
    });

    if (user.preference) {
      this.setState({
        front: !!user.preference.front,
        back: !!user.preference.back,
        mobile: !!user.preference.mobile,
        devops: !!user.preference.devops,
        manager: !!user.preference.manager,
        marketing: !!user.preference.marketing,
      });
    }
  }

  handleUpdateUser = (e) => {
    e.preventDefault();

    const { updateUserRequest } = this.props;

    const {
      username,
      password,
      password_confirmation,
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    const preference = {
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    };

    updateUserRequest(username, password, password_confirmation, preference);
  };

  render() {
    const {
      username, front, back, mobile, devops, manager, marketing,
    } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="#1d2331" barStyle="light-content" />
        <TitleName>Olá, {username}</TitleName>
        <Message>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
          selecionarmos os melhores meetups pra você:
        </Message>

        <Box>
          <Label>Preferências</Label>

          <SwitchContainer>
            <SwitchText>Front-end</SwitchText>
            <Switch
              onValueChange={value => this.setState({ front: value })}
              trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
              value={front}
              hitSlop={{
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
              }}
            />
          </SwitchContainer>

          <SwitchContainer>
            <SwitchText>Back-end</SwitchText>
            <Switch
              onValueChange={value => this.setState({ back: value })}
              trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
              value={back}
              hitSlop={{
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
              }}
            />
          </SwitchContainer>

          <SwitchContainer>
            <SwitchText>Mobile</SwitchText>
            <Switch
              onValueChange={value => this.setState({ mobile: value })}
              trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
              value={mobile}
              hitSlop={{
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
              }}
            />
          </SwitchContainer>

          <SwitchContainer>
            <SwitchText>Devops</SwitchText>
            <Switch
              onValueChange={value => this.setState({ devops: value })}
              trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
              value={devops}
              hitSlop={{
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
              }}
            />
          </SwitchContainer>

          <SwitchContainer>
            <SwitchText>Manager</SwitchText>
            <Switch
              onValueChange={value => this.setState({ manager: value })}
              trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
              value={manager}
              hitSlop={{
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
              }}
            />
          </SwitchContainer>

          <SwitchContainer>
            <SwitchText>Marketing</SwitchText>
            <Switch
              onValueChange={value => this.setState({ marketing: value })}
              trackColor={{ false: 'rgba(0, 0, 0, 0.3)', true: 'rgba(229, 85, 110, 0.8)' }}
              value={marketing}
              hitSlop={{
                top: 0,
                bottom: 0,
                left: 10,
                right: 10,
              }}
            />
          </SwitchContainer>
        </Box>

        <Button onPress={this.handleUpdateUser}>
          <TextButton>Continuar</TextButton>
          {/* ) : (
            <ActivityIndicator size="small" color="#fff" />
          )} */}
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Preferences);
