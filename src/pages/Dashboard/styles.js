import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1d2331;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Box = styled.View`
  margin-bottom: 20px;
  width: 100%;
  padding-left: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: left;
  padding: 10px 0;
`;

export const MeetupsList = styled.FlatList`
  /* flex-direction: row; */
`;

export const Meetup = styled.View`
  background: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  height: 222px;
  width: 290px;
`;
export const ImageMeetup = styled.Image`
  height: 146px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const InfoBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Info = styled.View`
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled.Text`
  color: #222222;
  font-size: 16px;
`;

export const Number = styled.Text`
  padding-top: 10px;
  font-size: 14px;
  color: #999999;
  opacity: 0.6;
`;

export const DetailsMeetup = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  margin-left: 40px;
  background-color: #e5556e;
  border: 0;
  border-radius: 30px;
  color: #fff;
`;

export const Message = styled.View`
  padding: 10px;
  background-color: #d9edf7;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  border-color: #bce8f1;
`;

export const MessageText = styled.Text`
  color: #31708f;
  font-size: 16px;
  font-weight: 400;
`;
