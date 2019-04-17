import React from 'react';

import {
  View, Platform, KeyboardAvoidingView, Image, Text, TextInput,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, SignForm } from '../styles';

import LogoIcon from '~/assets/logo.svg';

const SignIn = () => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <View>
      <Container>
        <SignForm>
          <Image source={LogoIcon} />

          <Text>Email</Text>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autofocus
            returnKeyType="next"
          />

          <Text>Senha</Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
          />

          <TouchableOpacity onPress={() => {}}>
            <Text>Entrar</Text>
          </TouchableOpacity>
        </SignForm>
      </Container>
    </View>
  </KeyboardAvoidingView>
);

export default SignIn;
