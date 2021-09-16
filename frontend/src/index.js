import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import {
  ThemeProvider,
  StyleReset} from "atomize";
const theme = {
  colors: {
    brand100: "#F9F8FC",
    brand200: "#F3F1FA",
    brand300: "#E9E6F6",
    brand400: "#D2CCEC",
    brand500: "#BCB3E2",
    brand600: "#9C8FD6",
    brand700: "#6F5CC3",
    brand800: "#553EB5",
    brand900: "#382683",
  }, grid: {
    containerWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "1156px"
    },
    gutterWidth: "12px",
  }
};

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 2. Provide the engine to the app
// debug engine needs inlined source maps
ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <ThemeProvider theme={theme}>
    <StyleReset />
    <App />
    </ThemeProvider>

  </StyletronProvider>, 
  document.getElementById('root')
);