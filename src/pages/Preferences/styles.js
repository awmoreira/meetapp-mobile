import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1d2331;
  justify-content: center;
  padding: 30px;
`;

export const Box = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: #fff;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
`;

export const SwitchText = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 18px;
`;

export const TitleName = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const Message = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-vertical: 30px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e5556e;
  width: 100%;
  height: 47px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
