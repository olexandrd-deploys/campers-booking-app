import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../vehicles/operations";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    flushContacts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const vehiclesReducer = vehiclesSlice.reducer;
