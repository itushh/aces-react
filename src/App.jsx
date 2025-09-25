import { BrowserRouter, Route, Routes } from "react-router-dom";
import NextTopLoader from "nextjs-toploader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Construction from "./pages/Construction";

function App() {
  return (
    <BrowserRouter>
      <div className="font-body">
        <NextTopLoader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Construction />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
