import React from "react";
import Navbar from "./components/navbar/navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Homepage";
import News from "./pages/news/News";

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/users" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
