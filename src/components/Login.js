
import { useNavigate } from 'react-router-dom';
import React from 'react';
import backgroundImg from "../assets/background.png";
import './SignupLogin.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSignup = () => {

        navigate('/Signup');
    };
    const handleLogin = () => {
        //It will be navigated to home page

        // navigate('/ChildEdu');
    };
    return (
        <>
            <div className='picture'><img src={backgroundImg} className='poster' alt='' />

                <div className='center'>
                    <form >
                        <h3>Login</h3>

                        <div className='text1'>
                            <input type='text' placeholder='Enter E-mail'></input>
                        </div>
                        <div className='text1'>

                            <input type='text' placeholder='Enter Password'></input>
                        </div>
                        <div className='login-link'> Forget Password? <a href="#">Click here</a></div>

                        <div className="btnn">

                            <div className="submit" onClick={handleLogin} type="submit" value="Login">Login</div>

                        </div>
                        <div className='Account'>Don't have Account? <a href="#" onClick={handleSignup}>Signup</a></div>
                    </form>
                </div>

            </div></>
    );
}
export default Login;
