import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
// import "./test";

ReactDOM.render(
  <React.StrictMode>
    <App name="AppComponent" desc="Some info" />
  </React.StrictMode>,
  document.getElementById('root')
);