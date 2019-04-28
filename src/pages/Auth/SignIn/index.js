import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import { StatusBar, Platform, TouchableOpacity } from 'react-native';

import {
  Keyboard,
  Container,
  LogoImage,
  Label,
  Input,
  Button,
  TextButton,
  TextCriar,
} from '../styles';

import LogoIcon from '~/assets/logo.png';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);

    this.setState({ password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Keyboard befhavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Container>
          <StatusBar backgroundColor="#1d2331" barStyle="light-content" />
          <LogoImage source={LogoIcon} />

          <Label>Email</Label>
          <Input
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autofocus
            returnKeyType="next"
            placeholder="Digite seu e-mail"
            placeholderTextColor="grey"
            onChangeText={email => this.setState({ email })}
            value={email}
          />

          <Label>Senha</Label>
          <Input
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            placeholder="Sua senha secreta"
            placeholderTextColor="grey"
            onChangeText={password => this.setState({ password })}
            value={password}
          />

          <Button onPress={this.handleSubmit}>
            <TextButton>Entrar</TextButton>
          </Button>

          <TouchableOpacity onPress={() => {}}>
            <TextCriar>Criar conta grátis</TextCriar>
          </TouchableOpacity>
        </Container>
      </Keyboard>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
