import { Fragment } from 'react';
import UserLoginForm from '../components/userlogin/UserLoginForm';

function LoginPage(props) {
  return (
    <Fragment>
      <section className='col-6 col-s-9'>
        <h1>LOGIN TO YOUR ACCOUNT!</h1>
      </section>
      <section className='col-6 col-s-9'>
        <UserLoginForm></UserLoginForm>
      </section>
    </Fragment>
  );
}

export default LoginPage;
