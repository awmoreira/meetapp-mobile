import styled from 'styled-components/native';

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background: #1d2331;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
`;

export const LogoImage = styled.Image`
  width: 40px;
  height: 40px;
  align-self: center;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  color: #ffffff;
  /* font-family: Helvetica, sans-serif; */
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 0px;
  border-radius: 3px;
  border: 0;
  background-color: transparent;
  color: #f6f6f6;
  opacity: 0.5;
  margin-top: 8px;
  font-size: 20px;

  &:focus {
    border-width: 1;
    border-color: #e5556e;
  }
`;

export const Button = styled.TouchableOpacity`
  height: 44px;
  border-radius: 30px;
  background: #e5556e;
  border: 0;
  font-size: 16px;
  padding: 0 10px;
  /* text-transform: uppercase; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const TextCriar = styled.Text`
  font-size: 16px;
  color: #f6f6f6;
  opacity: 0.6;
  margin-top: 20px;
  text-align: center;
`;
