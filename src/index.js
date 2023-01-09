import React from "react";
import ReactDOM from "react-dom/client";

import ParentAndChild from "./components/ParentAndChild";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentAndChild />
  </React.StrictMode>
);