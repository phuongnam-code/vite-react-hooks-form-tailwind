import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: null,
  user_id: null,
  userName: '',
  displayName: '',
  avatar: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  address: '',
  phone: '',
  email: '',
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateInfoUserStore: (state, action) => {
      state = action.payload;
    },
  }
});

export const { updateInfoUserStore } = actions;

export default reducer;
