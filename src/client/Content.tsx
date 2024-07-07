import "./styles/Content.css";
import "./styles/Loader.css";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";
import Dashboard from "./dashboard/Dashboard";

import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default Content;
