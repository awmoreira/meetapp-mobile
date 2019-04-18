import React from 'react';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Container, LogoImage, Label, Input,
} from '../styles';

import LogoIcon from '~/assets/logo.svg';

const SignIn = () => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <View>
      <Container>
        <LogoImage source={LogoIcon} />

        <Label>Email</Label>
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autofocus
          returnKeyType="next"
        />

        <Label>Senha</Label>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
        />

        <TouchableOpacity onPress={() => {}}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </Container>
    </View>
  </KeyboardAvoidingView>
);

export default SignIn;
