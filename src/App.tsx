import React from "react";
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import "./global.css";
import { RouteApp } from "./routes";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouteApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
