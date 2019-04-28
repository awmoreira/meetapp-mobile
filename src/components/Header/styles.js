import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  height: 54px;
  background: #e5556e;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20;
`;

export const Left = styled.View``;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Right = styled.TouchableOpacity``;
