import React from "react";

import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from "./App";
import "./index.css";

// REACT 18
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
