import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

button {
    padding: 4px 6px;
    border: 1px solid #999999;
    border-radius: 4px;
    background: none;
    cursor: pointer;
}
`;

export default GlobalStyles;
