import "../../styles/Badge.css";
import Skills from "./Skills";
import { memo } from "react";

interface CT {
  videoSrc: string;
}

const Badge = () => {
  const getAge = (birthDate: string) => {
    const [day, month, year] = birthDate.split(".").map(Number);
    const birth = new Date(year, month - 1, day);
    const ageDate = new Date(Date.now() - birth.getTime());
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="badge">
      {/*Added upperPart to sep between badge and skills*/}
      <div className="badge__upperPart">
        <div className="badge__badgeLeft">
          {/* <div className="badge__profileIcon"></div> */}
          <video
            src="/videos/profile-icon.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="badge__profileIcon"
          />
        </div>
        <div className="badge__badgeRight">
          <table>
            <tbody>
              <tr className="badge__fullName">
                <td>
                  <mark>name:</mark>
                </td>
                <td>Bohdan D.</td>
              </tr>
              <tr className="badge__class">
                <td>
                  <mark>class:</mark>
                </td>
                <td>web-developer</td>
              </tr>
              <tr className="badge__class">
                <td>
                  <mark>spec:</mark>
                </td>
                <td>full-stack</td>
              </tr>
              <tr className="badge__age">
                <td>
                  <mark>lvl:</mark>
                </td>
                <td>junior</td>
                {/* <td>{getAge("11.06.2003")}</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="badge__lowerPart">
        <Skills />
      </div>
    </div>
  );
};

export default Badge;
