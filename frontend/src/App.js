import './global.css';
import Routes from './routes';

import { PrimeReactCSS } from "primereact/resources/themes/saga-green/theme.css";
import { PrimeReactMinCsss } from "primereact/resources/primereact.min.css";
import { Icons } from "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import https from 'https';
import axios from 'axios';
// import * as fs from 'fs';

// var fs = require('fs')

function App() {
  // if (process.env.NODE_ENV === 'development') {
  //   const httpsAgent = new https.Agent({
  //     // ca: fs.readFileSync("./cert/rootCA.crt"),
  //     // cert: fs.readFileSync("./cert/domain.crt"),
  //     // key: fs.readFileSync("./cert/domain.key"),
  //     // passphrase: "springboot",
  //     rejectUnauthorized: 0
  //   })
  
  //   axios.defaults.httpsAgent = httpsAgent
  //   // eslint-disable-next-line no-console
  //   console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`)
  // }
  return (
    <Routes></Routes>
  );
}

export default App;
