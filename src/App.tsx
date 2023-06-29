import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// COMPONENTS
import "./global.css";
import { RouteApp } from "./routes";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <RouteApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
