import { createSlice } from '@reduxjs/toolkit';

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    id: '',
    userName: '',
    email: '',
    address: '',
    birthDate: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    loginUser(state, action) {
      const userCredentials = action.payload;
      state.id = userCredentials.id;
      state.userName = userCredentials.name;
      state.email = userCredentials.email;
      state.address = userCredentials.address;
      state.birthDate = userCredentials.birthDate;
      state.password = userCredentials.password;
      state.isLoggedIn = true;
    },
    logoutUser(state) {
      state.id = '';
      state.userName = '';
      state.email = '';
      state.address = '';
      state.birthDate = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const loggedUserActions = loggedUserSlice.actions;

export default loggedUserSlice;
