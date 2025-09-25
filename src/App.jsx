import { BrowserRouter, Route, Routes } from "react-router-dom"
import NextTopLoader from 'nextjs-toploader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
import Construction from "./pages/Construction"

function App() {
  return (
    <div className="font-body">
      <NextTopLoader />
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Construction />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App