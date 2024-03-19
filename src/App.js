import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeFormPage from "./pages/CodeFormPage";
import CodeEntriesPage from "./pages/CodeEntriesPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CodeFormPage />} />
        <Route path="/entries" element={<CodeEntriesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
