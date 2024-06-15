import "./styles/Content.css";
import Badge from "./components/Badge";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

const Content = () => {
  // return <main>Personality, Carrier</main>;
  return (
    <main>
      <Badge />
      <AboutMe />
      {/* <Skills /> */}
    </main>
  );
};

export default Content;
