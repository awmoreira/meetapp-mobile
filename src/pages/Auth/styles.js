import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background: #1d2331;
  display: flex;
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
  font-family: Helvetica, sans-serif;
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
  background-color: #1d2331;
  color: #f6f6f6;
  margin-top: 8px;
  transition: border 0.15s ease;
  font-size: 16px;

  &:focus {
    border-color: #e5556e;
  }
`;

// button {
//   margin: 20px 0 0;
//   border-radius: 25px;
//   font-size: 16px;
// }
// a {
//   text-decoration: none;

//   h1 {
//     text-align: center;
//     font-family: Helvetica, sans-serif;
//     font-size: 16px;
//     font-weight: 100;
//     opacity: 0.6;
//     color: #fff;
//     margin-top: 18px;
//   }
// }
