import { createSlice } from "@reduxjs/toolkit";

const initialLinkState = { isActive: null, sectionId: null };

const linkSlice = createSlice({
  name: "cart",
  initialState: initialLinkState,
  reducers: {
    setActive(state, action) {
      state.isActive = action.payload.active || action.payload.sectionId;
      if (action.payload.sectionId) state.sectionId = action.payload.sectionId;
    },
  },
});

export default linkSlice;
export const linkActions = linkSlice.actions;
