import "../../styles/AboutMe.css";

const AboutMe = () => {
  const skills = [
    {
      name: "HTML",
      id: 0,
    },
    {
      name: "CSS",
      id: 1,
    },
    {
      name: "JavaScript",
      id: 2,
    },
    {
      name: "TypeScript",
      id: 3,
    },
    {
      name: "React",
      id: 4,
    },
    {
      name: "Node",
      id: 5,
    },
    {
      name: "Express",
      id: 6,
    },
    {
      name: "MongoDB",
      id: 7,
    },
    {
      name: "NextJS",
      id: 8,
    },
    {
      name: "NestJS",
      id: 9,
    },
    {
      name: "Three.js",
      id: 10,
    },
    {
      name: "SASS/SCSS",
      id: 11,
    },
    {
      name: "Git",
      id: 12,
    },
    {
      name: "Rest API",
      id: 13,
    },
    {
      name: "CRUD",
      id: 14,
    },
    {
      name: "MVC",
      id: 15,
    },
    {
      name: "BEM",
      id: 16,
    },
    {
      name: "FP/OOP",
      id: 17,
    },
    {
      name: "Docker",
      id: 18,
    },
    {
      name: "Linux",
      id: 19,
    },
    {
      name: "Bash",
      id: 20,
    },
    {
      name: "Blender 3D",
      id: 21,
    },
  ];

  return (
    <div className="aboutMe__textContainer">
      <div className="aboutMe__textSubContainer">
        <h1 className="aboutMe__header">About me</h1>
        <article className="aboutMe__textBody">
          Hi, my name's Bohdan Denysenko! I'm a self-motivated Software
          Developer with over 3 years of experience that specializes in
          Full-Stack development with modern technologies such as React.js and
          Node.js frameworks. I enjoy teamwork, learning new things and writing
          clean code. I strive to think outside the box when necessary and apply
          the common knowledge where it’s proven to be the best approach. I am
          also a fan of functional programming.
        </article>
      </div>
      <div className="aboutMe__textSubContainer">
        <h2 className="aboutMe__header aboutMe__header--left">
          Learning Directions:
        </h2>
        <article className="aboutMe__textBody">
          Right now I’m working on solidifying my current knowledge and learning
          TypeScript, Nest and NextJS.
        </article>
      </div>
      <div className="aboutMe__textSubContainer">
        <h2 className="aboutMe__header aboutMe__header--left">
          Complete list of skills:
        </h2>
        <div className="aboutMe__textBody">
          <div className="aboutMe__skillsSubContainer">
            <ul className="aboutMe__skillsList">
              {skills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
