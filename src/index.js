import React from "react";
import ReactDOM from "react-dom/client";

// import ParentAndChild from "./components/ParentAndChild";
import BrotherCommunicate from "./components/BrotherCommunicate/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrotherCommunicate />
  </React.StrictMode>
);