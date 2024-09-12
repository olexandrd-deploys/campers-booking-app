import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    features: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    toggleFeature: (state, action) => {
      if (state.features.includes(action.payload)) {
        state.features = state.features.filter(
          (item) => item !== action.payload
        );
      } else {
        state.features.push(action.payload);
      }
    },
  },
});

export const { setLocation, toggleFeature, setType } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
