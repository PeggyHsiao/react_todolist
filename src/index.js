import React from "react";
import ReactDOM from "react-dom/client";

// import ParentAndChild from "./components/ParentAndChild";
import GetSnapshotBeforeUpdate from "./components/LifeCycle/getSnapshotBeforeUpdate";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GetSnapshotBeforeUpdate />
  </React.StrictMode>
);