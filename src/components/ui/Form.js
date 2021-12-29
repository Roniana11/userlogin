// A form component for user credentials

import classes from './Form.module.css';

function Form(props) {
  return (
    <form className={`${classes.form}`} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

export default Form;
