import "../../styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "TypeScript",
      progress: 40,
      id: 0,
    },
    {
      name: "React",
      progress: 85,
      id: 1,
    },
    {
      name: "Node",
      progress: 60,
      id: 2,
    },
    {
      name: "Express",
      progress: 75,
      id: 3,
    },
    {
      name: "MongoDB",
      progress: 70,
      id: 4,
    },
  ];

  return (
    <div className="skills">
      <div className="skills__subContainer">
        <div className="skills__header">Skills</div>
        <hr className="skills__ruler" />
        {skills.map((skill) => (
          <div className="skills__skillContainer" key={skill.id}>
            <div className="skills__skillName">{skill.name}</div>
            <div className="skills__skillProgressBg">
              <div
                className="skills__skillProgressFg"
                style={{ width: skill.progress + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
