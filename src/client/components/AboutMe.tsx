import "../styles/AboutMe.css";

const AboutMe = () => {
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
    </div>
  );
};

export default AboutMe;
