import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { DateTime } from "luxon";

// Type for our state
export interface TimingsState {
  timings: { time: DateTime; ranking: number }[] | undefined;
  loading: boolean;
  error?: Error;
}

// Initial state
const initialState: TimingsState = {
  timings: [],
  loading: true,
};

// Actual Slice
export const timingsSlice = createSlice({
  name: "timings",
  initialState,
  reducers: {
    setTimingsState(state, action: PayloadAction<TimingsState>) {
      state = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.timings,
      };
    },
  },
});

export const { setTimingsState } = timingsSlice.actions;

export const selectTimingsState = (state: AppState) => state.timings.timings;

export default timingsSlice.reducer;
