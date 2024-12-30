import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  user: {
    name: string;
    email: string;
    password: string;
    isSignedIn: boolean;
  };
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    password: '',
    isSignedIn: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signUp: (state, action) => {
      state.user = action.payload;
    },
    signOut: state => {
      state.user = {
        name: '',
        email: '',
        password: '',
        isSignedIn: false,
      };
    },
  },
});

export const {signIn, signUp, signOut} = userSlice.actions;
export default userSlice.reducer;
