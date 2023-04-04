import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* 
Using an editor of your choice, spin up a react project.

Build a math helper utility that does the following: 
 - I want a sum function that takes in x and y and returns the sum
 - I want a sub function that takes in x and y and returns the difference
 - One function should be exported by default, the other should be a named export

Import both functions into your App.js, and console.log the results.
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
