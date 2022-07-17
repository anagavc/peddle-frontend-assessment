import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import {
  LandingPage,
  Contact,
  About,
  Github,
  Terms,
  Privacy,
  Blog,
} from "./pages";
function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="github" element={<Github />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
