import StartPage from "./pages/startPage";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/addPage";
import CompletePage from "./pages/completePage";
import DeletePage from "./pages/deletePage";
import EditPage from "./pages/editPage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/complete" element={<CompletePage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
