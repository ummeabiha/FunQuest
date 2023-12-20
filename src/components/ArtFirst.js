import tiger from "../assets/FUNQUESTtiger.png";
import PinkButton from "./button";
import { Link } from "react-router-dom";
const ArtMain = () => {
    return (
      <>
        <div className="ArtMainPage">
          <div className="ContainerArtMain">
            <div className="ContentArtMain">
              <h1 className="ArtMainHead1">EXPLORE ART ATTACK</h1>
              <h1 className="ArtMainHead2">ARTS AND CRAFT</h1>
              <p className="ArtMainPara">
                Dive into a world of imagination and creativity in our Art and
                Craft section, where every brushstroke and crafty creation tells
                a unique story.
              </p>
              <Link to="/art">
                <PinkButton />
              </Link>
            </div>
            <div className="ArtMainDiv">
              <img src={tiger} alt="tiger pic" className="ArtMainPic" />
            </div>
          </div>
        </div>
      </>
    );
};
export default ArtMain;