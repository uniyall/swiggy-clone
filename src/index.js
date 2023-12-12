import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import dotenv from "dotenv";

dotenv.config();

root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
  <div className="m-0 p-0">
    <Navbar />
    <Body />
  </div>
);

root.render(<App />);
