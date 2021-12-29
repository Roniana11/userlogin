import classes from './UserProfile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/ui/Card';
import UserDateItem from '../components/UserDataItem';
import { useNavigate } from 'react-router-dom';
import { logoutCurrentUser } from '../store/loggedUserActions';
import { Fragment } from 'react';

function UserProfilePage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retreving current logged-in user info using redux toolkit
  const isLogged = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userName);
  const email = useSelector((state) => state.email);
  const address = useSelector((state) => state.address);
  const birthDate = useSelector((state) => state.birthDate);
  const password = useSelector((state) => state.password);

  const logoutHandler = () => {
    dispatch(logoutCurrentUser());
    navigate('/');
  };

  return (
    <Fragment>
      <section>
        <h1>{isLogged ?`Hello, ${userName}!`: 'Login to see you your profile'}</h1>
      </section>
      <section>
        <Card>
          {isLogged ? (
            <div className={classes.infoDiv}>
              <UserDateItem title="Name" value={userName}></UserDateItem>
              <UserDateItem title="Email" value={email}></UserDateItem>
              <UserDateItem title="Address" value={address}></UserDateItem>
              <UserDateItem
                title="Date of birth"
                value={birthDate}
              ></UserDateItem>
              <UserDateItem title="Password" value={password}></UserDateItem>
            </div>
          ) : (
            <div className={classes.noUser}>
              <p>NO USER IS LOGGED IN</p>
            </div>
          )}
          {isLogged &&
          <div className={classes.logoutBtn}>
            <button onClick={logoutHandler}>Logout</button>
          </div>}
        </Card>
      </section>
    </Fragment>
  );
}

export default UserProfilePage;
