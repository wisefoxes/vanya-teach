import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color__basic-100: #fff;
    --color__basic-200: #f6f6f8;
    --color__basic-300:#e8e9eb;
    --color__basic-400: #d1d4d7;
    // --color__basic-500: #6c717a;
    // --color__basic-500: #40464e;
    --color__basic-900: #191919;

    --color__primary-400: #ffea00;
    --color__primary-500: #ffd900;

    --font__primary: 'futura-pt', sans-serif;

    --font-weight__light: 300;
    --font-weight__regular: 400;
    --font-weight__medium: 500;
    --font-weight__semi-bold: 600;
    --font-weight__bold: 700;

    --min-width: 320px;
    --max-width: 1500px;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    font-family: var(--font__primary);
    min-width: var(--min-width);
  }
`;

export { GlobalStyles };
