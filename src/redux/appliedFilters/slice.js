import { createSlice } from "@reduxjs/toolkit";

const appliedFiltersSlice = createSlice({
  name: "appliedFilters",
  initialState: {
    location: "",
    type: "",
    features: [],
  },
  reducers: {
    setFilters: (state, action) => (state = action.payload),
  },
});

export const { setFilters } = appliedFiltersSlice.actions;
export const appliedFiltersReducer = appliedFiltersSlice.reducer;
