import "../../styles/Contacts.css";
import Socials from "./Socials";
import Form from "./Form";
import TextInfo from "./TextInfo";

const Contacts = () => {
  return (
    <div className="contacts__container">
      <h1 className="contacts__header">Contact me! (ง ื▿ ื)ว</h1>
      <div className="contacts__container contacts__container--sub">
        <TextInfo />
        <Socials />
      </div>
      <Form />
    </div>
  );
};

export default Contacts;
