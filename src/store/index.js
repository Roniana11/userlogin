import { configureStore } from '@reduxjs/toolkit';
import  loggedUserSlice from './loggedUser-slice';

const store = configureStore({ reducer: loggedUserSlice.reducer });

export default store;
