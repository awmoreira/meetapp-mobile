import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${colors.darkTransparent(0.1)};
  border-color: ${colors.whiteTransparent(0.1)};
  border-width: 1;
  margin-top: 10px;
`;

export const ImgPicker = styled.Image`
  flex: 1;
  width: 100%;
  resize-mode: cover;
`;
