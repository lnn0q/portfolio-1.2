import "../styles/AboutMe.css";

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
      name: "Javascript",
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
      name: "Three.js",
      id: 9,
    },
    {
      name: "SASS/SCSS",
      id: 10,
    },
    {
      name: "Git/Github/Gitlab",
      id: 11,
    },
    {
      name: "Rest API",
      id: 12,
    },
    {
      name: "CRUD",
      id: 13,
    },
    {
      name: "MVC",
      id: 14,
    },
    {
      name: "BEM",
      id: 15,
    },
    {
      name: "FP/OOP",
      id: 16,
    },
    {
      name: "Docker",
      id: 17,
    },
    {
      name: "Linux",
      id: 18,
    },
    {
      name: "Bash",
      id: 19,
    },
    {
      name: "Blender 3D",
      id: 20,
    },
  ];

  return (
    <div className="aboutMe__textContainer">
      <div className="aboutMe__textSubContainer">
        <div className="aboutMe__header">About me</div>
        <div className="aboutMe__textBody">
          Hi, my name's Bohdan Denysenko! I'm a self-motivated Software
          Developer with over 3 years of experience that specializes in
          Full-Stack development with modern technologies such as React.js and
          Node.js frameworks. I love teamwork, learning new things and writing
          clean code. I try to think outside the box wherever it’s called or
          apply the common knowledge where it’s proven as the best approach. I
          also like Functional Programming as, in my opinion, it drastically
          reduces the complexity of the code and makes it more readable.
        </div>
      </div>
      <div className="aboutMe__textSubContainer">
        <div className="aboutMe__header aboutMe__header--left">
          Learning Directions:
        </div>
        <div className="aboutMe__textBody">
          Right now I’m working on solidifying my current knowledge and learning
          TypeScript, Nest and NextJS.
        </div>
      </div>
      <div className="aboutMe__textSubContainer">
        <div className="aboutMe__header aboutMe__header--left">
          Complete list of skills:
        </div>
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
