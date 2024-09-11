import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const requestParams = {
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    limit: 100,
    // Filtering is not implemented in the backend
    // So we will fetch all the items and filter them in the frontend
    // until results size are small
  },
};
export const fetchCampers = createAsyncThunk(
  "vehicles/fetchCampers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/campers", requestParams);
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
