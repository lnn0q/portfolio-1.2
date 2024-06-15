import "./styles/Content.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

import { Routes, Route } from "react-router-dom";

const Content = () => {
  // return <main>Personality, Carrier</main>;
  return (
    <main>
      {/* <Skills /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default Content;
