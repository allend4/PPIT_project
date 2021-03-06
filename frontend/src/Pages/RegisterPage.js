import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';


function RegisterPage(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      // error
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }

  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="formContainer">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="confirmPassword" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">register</button>
        </li>
        <li>
          Already have an account? <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="detailsButton secondary textCentre" >Create your IDphone account</Link>
        </li>
      </ul>
    </form>
  </div>
}

export default RegisterPage;