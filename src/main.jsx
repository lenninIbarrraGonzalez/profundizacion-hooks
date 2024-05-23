import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// import { HooksApp } from "./HooksApp.jsx";
// import { CounterApp } from "./01-useState/CounterApp.jsx";
// import { CounterWhitHooks } from "./01-useState/CounterWithHooks.jsx";
// import { SimpleForm } from "./02-useEfect/SimpleForm.jsx";
//import { FormWidthCustomHook } from "./02-useEfect/FormWidthCustomHook.jsx";
//import { MultipleCustomHooks } from "./03-example/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Memorize } from "./06-memos/Memorize";
//import { MemoHook } from "./06-memos/MemoHook";
//import { CallBackHook } from "./06-memos/CallBackHook";
//import { Padre } from "./07-tarea-memo/Padre";

//import "../src/08-useReduce/introReduce";
//import { TodoApp } from "./08-useReduce/TodoApp";
import "./index.css";
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

  // </React.StrictMode>
);
