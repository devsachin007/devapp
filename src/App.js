import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Contact from "./components/Contact";
import {Home} from "./components/Home";

function App() {
  return<>
    <Routes>
      <Route exact path="/devapp" element={<Home />} />
      <Route path="/devapp/contact" element={<Contact />} />
    </Routes>
    </>
}

export default App;
