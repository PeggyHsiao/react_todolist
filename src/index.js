import React from "react";
import ReactDOM from "react-dom/client";

// import ParentAndChild from "./components/ParentAndChild";
import ShouldComponentUpdateExample from "./components/shouldComponentUpdate_example";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShouldComponentUpdateExample />
  </React.StrictMode>
);