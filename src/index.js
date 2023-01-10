import React from "react";
import ReactDOM from "react-dom/client";

// import ParentAndChild from "./components/ParentAndChild";
import ComponentDidUnmount from "./components/LifeCycle/componentDidUnmount";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentDidUnmount />
  </React.StrictMode>
);