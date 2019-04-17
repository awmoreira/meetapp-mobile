import { createGlobalStyle } from 'styled-components';

import Helvetica from '~/assets/helvetica-bold.otf';

// import 'react-circular-progressbar/dist/styles.css';

// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  @font-face {
    font-family: 'PTC55F';
    src: url(${Helvetica}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1d2331;
    color: #fff;
    font-family: 'Helvetica', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
