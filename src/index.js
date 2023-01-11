import React from "react";
import ReactDOM from "react-dom/client";

// import ParentAndChild from "./components/ParentAndChild";
import App from "./components/Hook/useMemo";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);