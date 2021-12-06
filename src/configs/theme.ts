import { Theme } from '@emotion/react';

const theme: Theme = {
  color: {
    black: '#000000',
    lightBlack: 'rgba(0, 0, 0, 0.3)',
    white: '#FFFFFF',
    gray100: '#d4d4d4',
    gray400: '#707070',
  },
  borderRadius: {
    default: '10px',
  },
  shadow: {
    default: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  fontSize: {
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '26px',
  },
  fontFamily: {
    base: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    light: 'Roboto-Light',
  },
};

export default theme;
