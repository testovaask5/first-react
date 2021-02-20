import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./test";

ReactDOM.render(
  <div>
    <App name="AppComponent" desc="Some info" />
    <App name="AppComponent" desc="Some info" />
    <App name="AppComponent" desc="Some info" />
  </div>,
  document.getElementById('root')
);