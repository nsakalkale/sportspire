import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Err from "./components/Err";

const App = () => {
  return (
    <div className="bg-light vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
