import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);  
  return (
    <Router>
      <Navbar />
      <LoadingBar height={2} color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={<News setProgress={setProgress} category="general" />}
        />

        <Route
          exact
          path="/business"
          element={<News setProgress={setProgress} category="business" />}
        />
        <Route
          exact
          path="/entertainment"
          element={<News setProgress={setProgress} category="entertainment" />}
        />
        <Route
          exact
          path="/health"
          element={<News setProgress={setProgress} category="health" />}
        />
        <Route
          exact
          path="/science"
          element={<News setProgress={setProgress} category="science" />}
        />

        <Route
          exact
          path="/sports"
          element={<News setProgress={setProgress} category="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={<News setProgress={setProgress} category="technology" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
