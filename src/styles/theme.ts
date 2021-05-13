import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      headings: '#F5F8FA',
      white: '#FFFFFF',
      highlight: '#FFBA08',
      highlight50: 'rgba(255, 186, 8, 0.5)',
      headingText: '#47585B',
      info: '#999999',
      infoLight: '#DADADA'
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
});


// highlight: '#FFBA08',
// highlight50: 'rgba(255, 186, 8, 0.5)',
// dark: {
//   '100': '#000000',
//   'headingText': '#47585B',
//   'Info': '#999999',
//   'Info.50': 'rgba(153, 153, 153, 0.5)',
// },
// light: {
//   'white': '#FFFFFF',
//   'headings': '#F5F8FA',
//   'info': '#DADADA'
// }