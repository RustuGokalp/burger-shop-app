import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import WrongPath from "./components/WrongPath";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" exact element={<WrongPath />} />
      </Routes>
    </>
  );
}

export default App;
