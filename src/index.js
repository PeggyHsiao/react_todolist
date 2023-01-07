import React from "react";
import ReactDOM from "react-dom/client";

//import List from './components/list';
import Card from "./components/card/card";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <List /> */}
    <Card />
  </React.StrictMode>
);