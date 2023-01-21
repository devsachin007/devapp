import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact";
import {Home} from "./components/Home";

function App() {
  return<>
    <BrowserRouter basename="devapp">
    <Routes>
      <Route exact path="/" element={<Home />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
    </Routes>
      </BrowserRouter>
    </>
}

export default App;
