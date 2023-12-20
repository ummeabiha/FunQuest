// Art.js
import React from "react";
import math from "../assets/math.png";
import EduMath from "../assets/EduMath.png";
import PinkButton from "./button";
import "./Edu.css";

const MathPageMain = () => {
  return (
    <>
      <div className="EduMath">
        <div className="MathContainer">
          <div className="MathContent">
            <img src={math} alt="drawing pic" className="math-image" />
            <p className="MathContentPara">
              We provide diverse array of age-appropriate books, storytelling
              sessions, and activities that ignite curiosity and instill a
              lifelong passion for exploring through the written word.
            </p>
            <PinkButton />
          </div>
          <div className="EduMathPic">
            <img src={EduMath} alt="drawing pic" className="EduMath-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MathPageMain;
