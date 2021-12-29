import { loggedUserActions } from './loggedUser-slice';
import { auth, colRef } from '../firestore';
import { getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authenticateUser = (enteredEmail, enteredPassword) => {
  return async (dispatch) => {
    let loginSuccess = true;
    const userCredetial = await signInWithEmailAndPassword(
      auth,
      enteredEmail,
      enteredPassword
    ).catch((error) => {
      alert('One of the values is incorrect');
      loginSuccess = false;
    });
    
    const userId = userCredetial.user.uid;

    const usersSnapshot = await getDocs(colRef);
    const docs = usersSnapshot.docs;
    const userData = docs.find((doc) => doc.id === userId).data();

    dispatch(
      loggedUserActions.loginUser({
        id: userId,
        ...userData,
      })
    );
    return loginSuccess;
  };
};

export const logoutCurrentUser = () => {
  return async (dispatch) => {
    signOut(auth)
      .then(() => alert('Signing out succeeded'))
      .catch((error) => {
        alert('an error happend');
      });
    dispatch(loggedUserActions.logoutUser());
  };
};
