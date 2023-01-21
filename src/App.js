import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Contact from "./components/Contact";
import {Home} from "./components/Home";

function App() {
  return<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
}

export default App;