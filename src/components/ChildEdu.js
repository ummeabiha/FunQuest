import React from 'react';
import ChildernEdu from "../assets/ChildrenEdu.png";
import Penguin from "../assets/penguin.png";
import { useNavigate } from 'react-router-dom';
import './ChildEdu.css';

const ChildEdu = () => {
    const navigate = useNavigate();

    const handleChild = () => {

        navigate('/Subject');

    };
    return (
        <>
            <div className='post'>
                <img src={ChildernEdu} alt='' className='pic' />
                <div className='con'>
                    <div className='peng'><img src={Penguin} /></div>
                    <div className='edu'>
                        <h2>EXPLORE LEARNING!</h2>
                        <h1>Children's Education</h1>
                        <p >Explore the diverse realms of knowledge and skill development.
                            Discover resources designed to expand your understanding across various
                            disciplines. </p>
                        <div className="btn1" onClick={handleChild}>Explore More</div>
                    </div>

                </div>
            </div>

        </>
    );
}
export default ChildEdu;

