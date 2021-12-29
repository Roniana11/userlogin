import classes from './UserLoginForm.module.css';
import Form from '../ui/Form';
import { authenticateUser } from '../../store/loggedUserActions';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Update the current email and password on every key stroke
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  // cheking if the specific input was touched to create UI feedback
  const [emailWasTouched, setEmailWasTouched] = useState(false);
  const [passwordWasTouched, setPasswordWasTouched] = useState(false);

  //cheking current values validity
  const emailInputIsValid = enteredEmail.trim().includes('@');
  const emailHasError = !emailInputIsValid && emailWasTouched;

  const passwordHasLetterAndNumbers = /^.*?[0-9]{1,}[a-z]{1,}.*?|.*?[a-z]{1,}[0-9]{1,}.*?$/.test(enteredPassword.trim());
  const passwordInputIsValid = passwordHasLetterAndNumbers && enteredPassword.trim().length >= 6;
  const passwordHasError = !passwordInputIsValid && passwordWasTouched;


  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEmailWasTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = (event) => {
    setPasswordWasTouched(true);
  };

  //cheking the entier form validity
  let isFormValid = !emailHasError && !passwordHasError;

  // Assigning classes according to the current validity
  const emailClasses = emailHasError ? 'invalid' : 'form';
  const passwordClasses = passwordHasError ? 'invalid' : 'form';

  // submit handler
  const formLoginHandler = async (event) => {
    event.preventDefault();

    if (isFormValid) {
      dispatch(authenticateUser(enteredEmail, enteredPassword)).then((res) => {
        if (res) {
          //navigate to user profile
          navigate('/user-profile');
        }
      });
    } else {
      alert('Some of the fields are incorrect');
      return;
    }

    //clear the form
    setEnteredEmail('');
    setEnteredPassword('');
    setEmailWasTouched(false);
    setPasswordWasTouched(false);
  };

  return (
    <Form onSubmit={formLoginHandler}>
      <div className={`${classes[emailClasses]} `}>
        <label htmlFor="email" to>
          Email
        </label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        ></input>
        {emailHasError && <p>Email address is incorrect</p>}
      </div>
      <div className={`${classes[passwordClasses]} `}>
        <label htmlFor="passward">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onBlur={passwordInputBlurHandler}
          onChange={passwordInputChangeHandler}
        ></input>
        {passwordHasError && (
          <p>
            password contain number and letters and have at least 6 characters
          </p>
        )}
      </div>
      <div>
        <button>Login</button>
      </div>
    </Form>
  );
}

export default UserLoginForm;
