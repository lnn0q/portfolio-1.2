import ProjectCell from "./ProjectCell";

const projects = [
  {
    name: "portfolio-1.2",
    link: "n0q.dev",
    gh_link: "https://github.com/lnn0q/portfolio-1.2",
    thumbnail: "",
    description: "This website (o´ω`o)ﾉ",
    status: [],
    techstack: [],
    id: "1",
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
