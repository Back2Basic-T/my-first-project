import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./Gallery";
import Story from "./Story";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* Header with Navigation */}
        <Header />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/my-first-project" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
