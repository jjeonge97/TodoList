import StartPage from "./pages/startPage";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompletePage from "./pages/completePage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/complete" element={<CompletePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
