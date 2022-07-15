import { Routes, Route } from "react-router-dom";
import { LandingPage, Contact } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
