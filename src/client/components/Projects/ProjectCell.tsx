interface Project {
  name: string;
  link: string;
  gh_link: string;
  thubmnail: string;
  description: string;
  techstack: string[];
  status: string[];
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
  return <li>Work in progress</li>;
};

export default ProjectCell;
