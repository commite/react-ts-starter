import { injectGlobal } from 'styled-components';

export default injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body, #root {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 100vw;
    font-family: Verdana, Geneva, sans-serif;
  }
`;