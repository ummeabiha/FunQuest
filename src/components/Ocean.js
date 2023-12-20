import React from "react";
import paper from "../assets/paper.png";
import glue from "../assets/glue.png";
import color from "../assets/color.png";
import scissor from "../assets/scissors.png";
import eyes from "../assets/eyes.gif";
import sticker from "../assets/sticker.gif";
import "./ArtMain.css";

const Ocean = () => {
    return (
      <>
        <div className="OceanS1">
          <h1 className="OceanHeadingS1">
            HELLO OCEAN
            <br /> EXPLORER!
          </h1>
          <p className="OceanParaS1">
            WHAT IS THE NAME OF YOUR <br /> UNDERWATER FRIEND?
          </p>
          <input type="text" className="inputBar"></input>
        </div>
        <div className="OceanS2">
          <div className="containerMaterial">
            <h1 className="OceanHeading">
              MATERIALS
              <br /> REQUIRED
            </h1>
            <img src={paper} alt="paper pic" className="materialImage" />
            <img src={glue} alt="Glue pic" className="materialImage" />
            <img src={scissor} alt="scissor pic" className="materialImage" />
            <img src={sticker} alt="Sticker gif" className="materialImage" />
            <img src={eyes} alt="eyes GIF" className="materialImage" />
            <img src={color} alt="Color pic" className="materialImage" />
          </div>
        </div>
        <div className="OceanS3">
          <h1 className="OceanHeading">WHALE* CREATION</h1>
          <p className="OceanParaS3">
            Draw Your Sea Creature
            <br />
            Cut it Out
            <br />
            Add Details
            <br />
            Create an Underwater Scene
            <br />
            Glue Your Sea Creature
            <br />
            Deacorate with Stickers
            <br />
            Add Googly Eyes
            <br />
          </p>
        </div>
        <div className="OceanS4">
          <div className="containerShare">
            <h1 className="OceanHeading">SHARE YOUR CREATION</h1>
            <form className="oceanForm">
              <label htmlFor="name">
                Name: &nbsp; &nbsp;
                <input type="text" id="name" name="name" />
              </label>
              <br />
              <label htmlFor="email">
                Email: &nbsp; &nbsp;&nbsp;
                <input type="email" id="email" name="email" />
              </label>
              <br />
              <label htmlFor="phone">
                Phone:&nbsp;&nbsp;&nbsp;
                <input type="tel" id="phone" name="phone" />
              </label>
              <br />
              <label htmlFor="creationName">
                Creation:
                <input type="text" id="creationName" name="creationName" />
              </label>
              <br />
              <label>Upload:</label>
              <label htmlFor="file" className="uploadLabel">
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".jpg, .jpeg, .png, .gif"
                />
                <span className="uploadIcon">&uarr;</span>
              </label>
            </form>
          </div>
        </div>
      </>
    );
};

export default Ocean;
