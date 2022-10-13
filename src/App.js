import Home from './Components/home/Home'
import About from './Components/about/About'
import Estados from './Components/about/Estados'
import Contact from './utils/Contact'
import Servicios from './Components/about/Servicios'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Estados" element={<Estados />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Servicios" element={<Servicios />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
