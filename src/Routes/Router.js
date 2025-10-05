
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../Layouts/Home";
import {Contact} from "../Layouts/Contact";
import {Projects} from "../Layouts/Projects";
import {Nav} from "../Layouts/Components/Nav";
import {Footer} from "../Layouts/Components/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );  
};
