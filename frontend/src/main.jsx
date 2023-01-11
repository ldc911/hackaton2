// import Login from "@pages/Login";
import Register from "@pages/Register";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
    <Register />
  </React.StrictMode>
);
