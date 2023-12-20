import React from 'react';
import Science from "../assets/science.png";
import Math from "../assets/maths.png";
import { useNavigate } from 'react-router-dom';
import Education from "../assets/Education.png";
import './Subject.css';

const Subject = () => {
    const navigate = useNavigate();

    const handleScience = () => {

        navigate('/SciencePage');
    };
    const handleMath = () => {

        navigate('/MathPage');
    };
    return (
        <>
            <div className='main'>
                <img src={Education} alt="Science" />
                <div className='contain'>

                    <div className='sci'>
                        <img src={Science} />
                        <div className='text'>
                            <h2>Science</h2>
                            <p>Explore realm of science and discovery</p>
                            <div className="btn2" onClick={handleScience}>Explore </div>
                        </div>

                    </div>
                    <div className='math'>
                        <img src={Math} />
                        <div className='text'>
                            <h2>Maths</h2>
                            <p>Unlock your calculation potential</p>
                            <div className="btn2" onClick={handleMath}>Explore </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Subject;
