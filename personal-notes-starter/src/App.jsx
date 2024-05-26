import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivPage from "./pages/ArchivPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
