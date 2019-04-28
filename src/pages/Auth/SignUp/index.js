import React from 'react';

import {
  StatusBar, KeyboardAvoidingView, Platform, TouchableOpacity,
} from 'react-native';

import {
  Container, LogoImage, Label, Input, Button, TextButton, TextCriar,
} from '../styles';

import LogoIcon from '~/assets/logo.png';

const SignUp = () => (
  <KeyboardAvoidingView befhavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
    <Container>
      <StatusBar backgroundColor="#1d2331" barStyle="light-content" />
      <LogoImage source={LogoIcon} />

      <Label>Nome</Label>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        autofocus
        returnKeyType="next"
        placeholder="Digite seu nome"
        placeholderTextColor="grey"
      />

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
      />

      <Button onPress={() => {}}>
        <TextButton>Criar conta</TextButton>
      </Button>

      <TouchableOpacity onPress={() => {}}>
        <TextCriar>Já tenho conta</TextCriar>
      </TouchableOpacity>
    </Container>
  </KeyboardAvoidingView>
);

export default SignUp;
