import Home from './Components/home/Home'
import About from './Components/about/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
