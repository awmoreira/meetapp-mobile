import React from 'react';

import {
  Container, Left, Title, Right,
} from './styles';

const Header = ({ title }) => (
  <Container>
    <Left />
    <Title>{title}</Title>
    <Right />
  </Container>
);

export default Header;
