import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { ThemeProvider } from 'atomize';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    brand100: '#b7ffbf',
    brand200: '#F3F1FA',
    brand300: '#E9E6F6',
    brand400: '#D2CCEC',
    brand500: '#BCB3E2',
    brand600: '#9C8FD6',
    brand700: '#6F5CC3',
    brand800: '#553EB5',
    brand900: '#382683',
  },
  grid: {
    containerWidth: {
      xs: '540px',
      sm: '720px',
      md: '960px',
      lg: '1156px',
      xl: '1156px',
    },
    gutterWidth: '12px',
  },
};

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
ReactDOM.render(
  <BrowserRouter>
    <StyletronProvider value={engine}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyletronProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
