import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: true,
};

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState: initialState,
  reducers: {
    setCursor: (state) => {
      state.active = !state.active;
    },
  },
});

export const { setCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
