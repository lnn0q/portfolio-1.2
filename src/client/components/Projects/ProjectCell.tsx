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

const ProjectCell = ({
  name,
  link,
  gh_link,
  thubmnail,
  description,
  techstack,
  status,
}: Project) => {
  const techColor = (tech: string) => {
    switch (tech) {
      case "react":
        return "#209fb5";
      case "express":
        return "#e64553";
      case "node":
        return "#40a02b";
      case "mongodb":
        return "#a6d189";
      case "javascript":
        return "#df8e1d";
      case "typescript":
        return "#1e66f5";
    }
  };

  return (
    <li className="projectCell">
      <div className="projectCell__thumbnailContainer">
        <img className="projectCell__thumbnail" src={thubmnail} />
      </div>
      <div className="projectCell__textContainer">
        <div className="projectCell__header">
          <div className="projectCell__label">{name}</div>
          <div className="projectCell__linkContainer">
            {link && (
              <a href={link} target="_blank" className="projectCell__link">
                &#xeb15;
              </a>
            )}
            {gh_link && (
              <a
                href={gh_link}
                target="_blank"
                className="projectCell__link projectCell__link--code"
              >
                &#xeac4;
              </a>
            )}
          </div>
        </div>
        <div className="projectCell__statusContainer">
          <div
            className={`projectCell__status projectCell__status--${
              status === "complete" ? "complete" : "wip"
            }`}
          >
            {status}
          </div>
        </div>
        <ul className="projectCell__techstack">
          {techstack.map((tech, index) => (
            <li
              key={index}
              className="projectCell__tech"
              style={{ backgroundColor: `${techColor(tech)}` }}
            >
              {tech}
            </li>
          ))}
        </ul>
        <article className="projectCell__description">{description}</article>
      </div>
    </li>
  );
};

export default ProjectCell;
