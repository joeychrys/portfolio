import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
  location: "",
};

export const routerSlice = createSlice({
  name: 'router',
  initialState:initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoaded = !state.isLoaded;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLoading, setLocation } = routerSlice.actions;

export default routerSlice.reducer;
