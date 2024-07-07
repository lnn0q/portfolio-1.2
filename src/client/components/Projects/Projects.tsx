import "../../styles/Projects.css";
import ProjectCell from "./ProjectCell";

import { useState, useEffect } from "react";

interface Project {
  name: string;
  link: string;
  gh_link: string;
  thubmnail: string;
  description: string;
  techstack: string[];
  status: string;
  id: string;
}

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw Error("Failed recieve data");
        const data = await res.json();
        setIsLoading(false);
        setProjects(data);
      } catch (err: any) {
        setIsError(true);
        setErrorMsg(err.message);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      {isError && (
        <div className="notification notification--error">
          Error: {errorMsg}
        </div>
      )}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
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
      )}
    </>
  );
};

export default Projects;
