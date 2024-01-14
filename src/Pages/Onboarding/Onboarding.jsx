import React, { useEffect, useState } from 'react';
import './Onboarding.Style.css';
import Logoos from '../../assets/icons/newLogo.jpg';
import PropsInputField from '../../components/PropsInputField/PropsInputField';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn, resetData, signUp } from '../../Redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";


const Onboarding = () => {
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [nin, setNin] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showComfirmPassword, setShowComfirmPassword] = useState(false);


  const propsDispatcher = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setLogin(!isLogin);
    setShowResetForm(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    propsDispatcher(logIn({
      email: email,
      password: password,
      loggedIn: true,
    }))

    navigate("/")
  };

  

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   await propsDispatcher(
  //     signUp({
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       password: password,
  //       comfirmPassword: comfirmPassword,
  //       nin: nin,
  //     })
  //   );
  // useEffect(() => {
  //   navigate('/')
  // })
  // };


  const handleSignup = (e) => {
    e.preventDefault();
    propsDispatcher(signUp({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      comfirmPassword: comfirmPassword,
      nin: nin,
    }));

    navigate("/");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    propsDispatcher(resetData({
      resetEmail: resetEmail,
      newPassword: newPassword,
      comfirmPassword: comfirmPassword,
    }))
    console.log('Reset password for:', resetEmail, password, comfirmPassword);
  };

  const handleEmail = ({target: {value}}) => {
    setEmail(value);
  };

  const handlePassword = ({target: {value}}) => {
    setPassword(value);
  };

  const handleFirstName = ({target: {value}}) => {
    setFirstName(value);
  };

  const handleLastName = ({target: {value}}) => {
    setLastName(value);
  };

  const handleNewPassword = ({target: {value}}) => {
    setNewPassword(value);
  };

  const handleComfirmPassword = ({target: {value}}) => {
    setComfirmPassword(value)
  };

  const handleResetEmail = ({target: {value}}) => {
    setResetEmail(value);
  };

  const handleNIN = ({target: {value}}) => {
    setNin(value);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'newPassword') {
      setShowPassword(!showPassword);
    } if (field === 'comfirmPassword') {
      setShowComfirmPassword(!showComfirmPassword);
    } else if (field === 'password') {
      setShowLoginPassword(!showLoginPassword)
    }
  };
  

  return (
    <div className='onboardingParent'>
        <div className='logosParent'>
            <img className='logoos' src={Logoos} alt='logoos' />
        </div>
        <div className="onboardingFields">
      {showResetForm ? (
        <>
          <form onSubmit={(e) => handleResetPassword(e)}>
            <h2>Create New Password</h2>
            <PropsInputField
            type="email"
            id="resetEmail"
            names="resetEmail"
            placeholder='Enter Email'
            value={resetEmail}
            onChange={handleResetEmail}
            />
            <div className='parentToggle'>
              <PropsInputField
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              names="newPassword"
              placeholder='Password'
              value={newPassword}
              onChange={handleNewPassword}
              />
              <span className='toggleViz' onClick={() => togglePasswordVisibility('newPassword')}>
              {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
              </span>
            </div>
            <div className='parentToggle'>
              <PropsInputField
              type={showComfirmPassword ? 'text' : 'password'}
              id="comfirmPassword"
              names="comfirmPassword"
              placeholder='Comfirm Password'
              value={comfirmPassword}
              onChange={handleComfirmPassword}
              />
              <span className='toggleViz' onClick={() => togglePasswordVisibility('comfirmPassword')}>
              {showComfirmPassword ? <MdOutlineVisibility /> :  <MdOutlineVisibilityOff />}
              </span>
            </div>
            <Button className='onboardingBtn' type="submit" title='Reset Password' />
            <p className='pees'>
                Already have an account?{' '}
                <span className='spanning' onClick={toggleForm}>
                Log in
                </span>
                </p>
          </form>
        </>
      ) : isLogin ? (
        <>
          <form onSubmit={(e) => handleLogin(e)}>
            <h2>Login</h2>
            <PropsInputField
            type="email"
            id="email"
            names="email"
            placeholder='Email Address'
            value={email}
            onChange={handleEmail}
            />
            <div className='parentToggle'>
              <PropsInputField
              type={showLoginPassword ? 'text' : 'password'}
              id="password"
              names="password"
              placeholder='Password'
              value={password}
              onChange={handlePassword}
              />
              <span className='toggleViz' onClick={() => togglePasswordVisibility('password')}>
              {showComfirmPassword ? <MdOutlineVisibility /> :  <MdOutlineVisibilityOff />}
              </span>
            </div>
            <p className='forgetPassword' onClick={() => setShowResetForm(!showResetForm)}>Forget Password</p>
            <Button className='onboardingBtn' type="submit" title='Login' />
            <p className='pees'>
            Don’t have an account?{' '}
            <span className='spanning' onClick={toggleForm}>
              Sign up
            </span>
          </p>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={(e) => handleSignup(e)}>
            <h2>Sign up</h2>
            <p>Welcome to Propout</p>
            <PropsInputField
            type="text"
            id="firstName"
            names="firstName"
            placeholder='First Name'
            value={firstName}
            onChange={handleFirstName}
            />
            <PropsInputField
            type="text"
            id="lastName"
            names="lastName"
            placeholder='Last Name'
            value={lastName}
            onChange={handleLastName}
            />
            <PropsInputField
            type="email"
            id="email"
            names="email"
            placeholder='Email Address'
            value={email}
            onChange={handleEmail}
            />
            <PropsInputField
            type="text"
            id="nin"
            names="nin"
            placeholder='NIN Number'
            value={nin}
            onChange={handleNIN}
            />
            <div className='parentToggle'>
              <PropsInputField
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              names="newPassword"
              placeholder='Password'
              value={newPassword}
              onChange={handleNewPassword}
              />
              <span className='toggleViz' onClick={() => togglePasswordVisibility('newPassword')}>
              {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
              </span>
              </div>
            <div className='parentToggle'>
              <PropsInputField
              type={showComfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              names="confirmPassword"
              placeholder='Confirm Password'
              value={comfirmPassword}
              onChange={handleComfirmPassword}
              />
              <span className='toggleViz' onClick={() => togglePasswordVisibility('comfirmPassword')}>
              {showComfirmPassword ? <MdOutlineVisibility /> :  <MdOutlineVisibilityOff />}
              </span>
            </div>
            <p className='forgetPassword' onClick={() => setShowResetForm(!showResetForm)}>Forget Password</p>
            <Button className='onboardingBtn' type="submit" title='Signup' />
                <p className='pees'>
                Already have an account?{' '}
                <span className='spanning' onClick={toggleForm}>
                Log in
                </span>
                </p>
          </form>
        </>
      )}
    </div>
    </div>
  );
};

export default Onboarding;