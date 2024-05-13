import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp.jsx";
// import { CounterApp } from "./01-useState/CounterApp.jsx";
// import { CounterWhitHooks } from "./01-useState/CounterWithHooks.jsx";
import { SimpleForm } from "./02-useEfect/SimpleForm.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <SimpleForm />
  // </React.StrictMode>
);
