import { createGlobalStyle } from 'styled-components';

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
};

export const GlobalStyles = createGlobalStyle`
  :root {
  --rose-red: #c40550;
  --orangeness: #ff5722;
  --greenish: #5bff22;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh;
}

`;
