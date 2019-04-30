import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1d2331;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: stretch;
`;

export const ImageMeetup = styled.Image`
  height: 212px;
  width: 100%;
`;

export const Info = styled.View`
  padding: 30px;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 10px;
`;

export const Subs = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  color: #999999;
  text-align: left;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 16px;
  color: #ffffff;
  line-height: 28px;
  text-align: left;
  margin-bottom: 10px;
`;

export const LocaleLabel = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  color: #999999;
  text-align: left;
`;

export const Locale = styled.Text`
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 14px;
  color: #ffffff;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;
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
