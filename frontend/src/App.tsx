import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PhysicalPage from "./pages/PhysicalPage";
import PersonalityPage from "./pages/PersonalityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/physical" element={<PhysicalPage />} />
        <Route path="/personality" element={<PersonalityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
