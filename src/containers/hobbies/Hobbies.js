import React from "react";
import { hobbiesSection } from "../../portfolio";

export default function Hobbies() {
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="skills-heading">{hobbiesSection.title} </h1>
            <div>
            {hobbiesSection.hobbies.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="abbas sitting on table" src={require("../../assests/images/hobbies.svg")}></img>
        </div>
      </div>
    </div>
  );
}
