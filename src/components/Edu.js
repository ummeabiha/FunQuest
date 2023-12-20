// Art.js
import React from "react";
import writing from "../assets/writing.png";
import visualizing from "../assets/visualizing.png";
import drawing from "../assets/drawing.png";
import book from "../assets/book.png";
import story from "../assets/story.png";
import novel from "../assets/novel.png";
import "./Edu.css";

const Education = () => {
  return (
    <>
      <div className="Education">
        <h1 className="EducationHeading">Upcoming Courses </h1>
        <p className="EducationPara">EMPOWER AND EXPAND YOUR DISCIPLINES</p>
        <div className="Educationcontainer">
          <button className="Educationbox">
            <img src={writing} alt="Writing" className="gif-image" />
          </button>
          <button className="Educationbox">
            <img
              src={visualizing}
              alt="visualizing pic"
              className="gif-image"
            />
          </button>
          <button className="Educationbox">
            <img src={drawing} alt="drawing pic" className="gif-image" />
          </button>
        </div>
      </div>
      <div className="Education" id="Reading">
        <h1 className="EducationHeading">Reading Mania </h1>
        <p className="EducationPara">ELEVATE YOUR READING STYLES</p>
        <div className="Educationcontainer">
          <button className="Educationbox">
            <img src={book} alt="book" className="gif-image" />
          </button>
          <button className="Educationbox">
            <img src={novel} alt="visualizing pic" className="gif-image" />
          </button>
          <button className="Educationbox">
            <img src={story} alt="drawing pic" className="gif-image" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Education;
