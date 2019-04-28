// import Color from 'color';

export default {
  white: '#fff',
  lighter: '#eee',
  light: '#ddd',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',
  transparent: 'transparent',
  darkTransparent: opacity => `rgba(0, 0, 0, ${opacity})`,
  whiteTransparent: opacity => `rgba(255, 255, 255, ${opacity})`,

  primary: '#e5556e',
  // primaryDark: variant => Color('#e5556e').darken(variant),
  // primaryLight: variant => Color('#e5556e').lighten(variant),

  secundary: '#23202c',
  // secundaryDark: variant => Color('#23202c').darken(variant),
  // secundaryLight: variant => Color('#23202c').lighten(variant),

  success: '#9dca83',
  danger: '#e37a7a',
};
