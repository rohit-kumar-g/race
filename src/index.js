import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MyProductsProvider } from "./myhelper_r/context/MyProductcontext";
import { MyFilterProvider } from "./myhelper_r/context/MyFilterContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProductsProvider>
    <MyFilterProvider>
      <App />
    </MyFilterProvider>
  </MyProductsProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(// console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
