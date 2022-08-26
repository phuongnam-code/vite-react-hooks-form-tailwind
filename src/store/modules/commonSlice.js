import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoute: {
    fullPath: '',
    path: '',
    name: '',
    hidden: false,
    iconName: '',
    componentName: '',
  },
  titlePage: '',
};

const { actions, reducer } = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateCurrentRouteCommonStore: (state, action) => {
      state.currentRoute = action.payload;
    },
    updateTitlePageCommonStore: (state, action) => {
      state.titlePage = action.payload;
    },
  }
});

export const {
  updateCurrentRouteCommonStore,
  updateTitlePageCommonStore,
} = actions;

export default reducer;
