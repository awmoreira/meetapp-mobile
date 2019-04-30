import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1d2331;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
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
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 0px;
  border-radius: 3px;
  border: 0;
  background-color: #1d2331;
  color: #f6f6f6;
  /* margin-top: 8px; */
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e5556e;
  width: 100%;
  height: 47px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
