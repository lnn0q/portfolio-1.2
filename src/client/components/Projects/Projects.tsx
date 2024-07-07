import "../../styles/Projects.css";
import ProjectCell from "./ProjectCell";

const projects = [
  {
    name: "portfolio-1.2",
    link: "https://n0q.dev/",
    gh_link: "https://github.com/lnn0q/portfolio-1.2",
    thumbnail:
      "https://github.com/lnn0q/portfolio-1.2/raw/main/assets/preview-1.png",
    description: "This website (o´ω`o)ﾉ",
    status: "in progress",
    techstack: ["react", "express", "node", "typescript"],
    id: "1",
  },
  {
    name: "eml-builder",
    link: "",
    gh_link: "https://github.com/lnn0q/eml-builder",
    thumbnail:
      "https://github.com/lnn0q/eml-builder/raw/main/assets/screen_view_1.png",
    description: "Web-based eml generator 🪶",
    status: "complete",
    techstack: ["react", "express", "node", "mongodb"],
    id: "2",
  },
];

const Projects = () => {
  return (
    <ul className="projects">
      {projects.map((project) => (
        <ProjectCell
          key={project.id}
          name={project.name}
          link={project.link}
          gh_link={project.gh_link}
          thubmnail={project.thumbnail}
          description={project.description}
          status={project.status}
          techstack={project.techstack}
          id={project.id}
        />
      ))}
    </ul>
  );
};

export default Projects;
