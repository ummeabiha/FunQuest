import React from "react";
import { Link } from "react-router-dom";
import octopus from "../assets/octopus.gif";
import green from "../assets/green venture.gif";
import earth from "../assets/earth.gif";
import "./ArtMain.css";

const Art = () => {
  return (
    <div className="ArtAdventures">
      <h1 className="ArtAdventuresHeading">Art Adventures</h1>
      <p className="ArtAdventuresPara">
        ART ACTIVITIES FOR ENHANCED CREATIVITY
      </p>
      <div className="ArtAdventurescontainer">
        <Link to="/ocean">
          <button className="ArtAdventuresbox">
            <img src={octopus} alt="Octopus GIF" className="gif-image" />
          </button>
        </Link>
        <button className="ArtAdventuresbox">
          <img src={green} alt="Green Venture GIF" className="gif-image" />
        </button>
        <button className="ArtAdventuresbox">
          <img src={earth} alt="Earth GIF" className="gif-image" />
        </button>
      </div>
    </div>
  );
};

export default Art;
